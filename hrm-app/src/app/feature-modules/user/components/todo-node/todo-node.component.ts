import { Component, Input, OnInit } from '@angular/core';
import { TodoNote } from 'src/app/core/models/todo/Todo';

@Component({
  selector: 'app-todo-node',
  templateUrl: './todo-node.component.html',
  styleUrls: ['./todo-node.component.scss']
})
export class TodoNodeComponent implements OnInit {
@Input() todoNote:TodoNote|null=null;
  constructor() { }

  ngOnInit() {
  }

}
