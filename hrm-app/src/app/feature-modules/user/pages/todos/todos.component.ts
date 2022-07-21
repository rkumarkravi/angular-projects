import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import {
  Component,
  ElementRef,
  Inject,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  MatBottomSheet,
  MatBottomSheetRef,
  MAT_BOTTOM_SHEET_DATA,
} from '@angular/material/bottom-sheet';
import * as moment from 'moment';
import { urlConsts } from 'src/app/core/constants/urlConstants';
import { SnackbarService } from 'src/app/core/services/snackbar.service';
import { Utils } from 'src/app/core/utils/Utils';
import {  Todo, TodoNote, UTILSINJECT } from './../../../../core/models/todo/Todo';
import { DataService } from './../../../../core/services/data.service';
import { UserService } from './../../../../core/services/user.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [
    // {
    //   id: 2,
    //   date: '2022-06-12',
    //   todoNotes: [
    //     {
    //       id: 5,
    //       priority: 'MEDIUM',
    //       desc: 'item 1',
    //       added: '2022-06-12T11:44:53.341+00:00',
    //       completed: false
    //     },
    //     {
    //       id: 2,
    //       priority: 'LOW',
    //       desc: 'item 2',
    //       added: '2022-06-12T11:44:53.341+00:00',
    //       completed: false
    //     },
    //   ],
    // },
    // {
    //   id: 5,
    //   date: '2022-06-13',
    //   todoNotes: [
    //     {
    //       id: 5,
    //       priority: 'MEDIUM',
    //       desc: 'item 4',
    //       added: '2022-06-12T11:44:53.341+00:00',
    //       completed: false
    //     },
    //     {
    //       id: 2,
    //       priority: 'LOW',
    //       desc: 'item 5',
    //       added: '2022-06-12T11:44:53.341+00:00',
    //       completed: false
    //     },
    //   ],
    // },
    // {
    //   id: 3,
    //   date: '2022-06-17',
    //   todoNotes: [
    //     {
    //       id: 2,
    //       priority: 'HIGH',
    //       desc: 'item 3',
    //       added: '2022-06-12T11:44:53.341+00:00',
    //       completed: true
    //     },
    //   ],
    // },
  ];

  @Input() todo: Todo | null = null;
  myList: any = [];
  constructor(
    private _bottomSheet: MatBottomSheet,
    private snackBarService: SnackbarService,
    private dataService: DataService,
    private userService: UserService,
    @Inject(UTILSINJECT) private utils:Utils
  ) {
    console.log("utils:",utils)
    console.log("randomnumber is:",utils.getRandom())
    this.dataService
      .get(dataService.genUrl(urlConsts.todo, 'get-all', this.userService.uid))
      .subscribe((data: Todo[]) => {
        this.todos = data;
      });
    for (let todo of this.todos) {
      this.myList.push('' + todo.id);
    }
    console.log(this.myList);
  }

  ngOnInit() {}
  zindex=0;
  movedOnDrag(elemnt: HTMLElement) {
    console.log('moved');
    elemnt.style.zIndex=""+this.zindex++;
  }

  drop(event: CdkDragDrop<TodoNote[]>) {
    console.log(event.previousContainer.id, event.container.id);
    if (event) {
      if (event.container.id === event.previousContainer.id) {
        moveItemInArray(
          event.container.data,
          event.previousIndex,
          event.currentIndex
        );
      } else {
        this.dataService.put(
          this.dataService.genUrl(urlConsts.todo,'move','todo-note',event.container.id,event.previousContainer.data[event.previousIndex].id))
          .subscribe((data:any) => {
            console.log(data);
            transferArrayItem(
              event.previousContainer.data,
              event.container.data,
              event.previousIndex,
              event.currentIndex
            );
          });
      }
    }
  }

  openBottomSheet(todo: Todo) {
    let ref: MatBottomSheetRef = this._bottomSheet.open(TodoNodeAddComponent, {
      data: todo,
      disableClose: true,
    });
    ref.afterDismissed().subscribe((todoNote: TodoNote) => {
      if (todoNote.desc!=null) {
        console.log('data from bottom sheet:', todoNote);
        this.dataService
          .post(
            this.dataService.genUrl(
              urlConsts.todo,
              'insert',
              'todo-note',
              todo.id
            ),
            todoNote
          )
          .subscribe((data: Todo) => {
            this.todos.find((x) => x.id === todo.id).todoNotes=data.todoNotes;
          });
      } else {
        console.log('data is :' + todoNote);
      }
    });
  }

  deleteTodo(todo: Todo) {
    if(confirm('Are you sure you want to delete this todo?')){
      this.dataService.delete(this.dataService.genUrl(urlConsts.todo, 'delete', todo.id)).subscribe((data:any) => {
        this.todos = this.todos.filter((t) => t.id !== todo.id);
      });
    }
  }

  createNewTodo() {
    let newTodo: Todo = {
      id: this.todos.length + 1,
      date: moment().format('YYYY-MM-DD'),
      todoNotes: [],
    };
    console.log(
      'condition:',
      this.todos.some((x) => x.date !== newTodo.date)
    );
    if (!this.todos.some((x) => x.date === newTodo.date)) {
      this.dataService
        .post(
          this.dataService.genUrl(
            urlConsts.todo,
            'create',
            this.userService.uid
          )
        )
        .subscribe((data: Todo) => {
          this.todos.push(data);
        });
    } else {
      this.snackBarService.openSnackBar(
        'Already For todays date exists!',
        'OK!'
      );
    }
  }
}

@Component({
  selector: 'bottom-sheet-overview-example-sheet',
  template: `
    <section>
      <div
        style="display:flex;justify-content:space-between;align-items:center;"
      >
        <b>Add Todo for {{ data.date }}</b>
        <button
          matSuffix
          mat-icon-button
          aria-label="Close"
          (click)="closeBottomSheet($event)"
        >
          <mat-icon>close</mat-icon>
        </button>
      </div>
      <mat-form-field appearance="outline" style="width: 90%;padding:0 1em;">
        <mat-label>Enter todo</mat-label>
        <input matInput type="text" [(ngModel)]="todoText" cdkFocusInitial />
        <button
          *ngIf="todoText"
          matSuffix
          mat-icon-button
          aria-label="Clear"
          (click)="todoText = ''"
        >
          <mat-icon>close</mat-icon>
        </button>
      </mat-form-field>
      <button
        matSuffix
        mat-flat-button
        aria-label="Add"
        color="primary"
        style="margin-left: 1em;"
        (click)="saveTodo()"
      >
        <mat-icon>add</mat-icon> Todo
      </button>
    </section>
  `,
})
export class TodoNodeAddComponent {
  todoText: string | undefined;
  note: TodoNote = {
    added: moment().format('YYYY-MM-DD'),
    desc: '',
    priority: 'MEDIUM',
    id: Math.random() * 10 + 10,
    completed: false,
  };
  constructor(
    private _bottomSheetRef: MatBottomSheetRef<TodoNodeAddComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: Todo
  ) {}

  closeBottomSheet(event: MouseEvent): void {
    this.note.desc = this.todoText;
    this._bottomSheetRef.dismiss(this.note);
    event.preventDefault();
  }

  saveTodo() {
    if (this.todoText) {
      this.note.desc = this.todoText;
      this._bottomSheetRef.dismiss(this.note);
    }
  }
}
