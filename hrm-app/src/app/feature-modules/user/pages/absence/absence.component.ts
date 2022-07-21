import { Component, OnInit, ViewChild } from '@angular/core';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DataService } from 'src/app/core/services/data.service';
import { urlConsts } from 'src/app/core/constants/urlConstants';
import * as moment from 'moment';
import { Absence } from './../../../../core/models/absence/Absence';
import { SnackbarService } from 'src/app/core/services/snackbar.service';
import { AbsenceType } from 'src/app/core/enums/AbsenceType.enum';
import {
  MatCalendar,
  MatCalendarCellCssClasses,
} from '@angular/material/datepicker';
@Component({
  selector: 'app-absence',
  templateUrl: './absence.component.html',
  styleUrls: ['./absence.component.scss'],
})
export class AbsenceComponent implements OnInit {
  symbols = ['SICK', 'EARNED', 'WEEKEND'];
  absenceFormGroup: FormGroup = new FormGroup({
    fromDate: new FormControl(),
    toDate: new FormControl(),
    absenceType: new FormControl(),
    reason: new FormControl(),
  });
  absences: { from: string; to: string; type: string }[];
  viewType: string = 'list';
  readonly SomeEnum = AbsenceType;
  constructor(
    private dataService: DataService,
    private snackbarService: SnackbarService
  ) {}

  ngOnInit() {
    this.getAbsences();
  }

  onChangeViewType($event) {
    console.log($event.value);
  }

  getAbsences() {
    let month = parseInt(moment().format('MM'));
    this.getAllAbsence(month);
  }

  weekendsDatesFilter = (d: Date): boolean => {
    const day = d.getDay();
    return day !== 0 && day !== 6;
  };

  addAbsence() {
    console.log('FormData', this.absenceFormGroup.getRawValue());
    let req = this.absenceFormGroup.getRawValue();
    req.fromDate = moment(req.fromDate).format('DD/MM/YYYY');
    req.toDate = moment(req.toDate).format('DD/MM/YYYY');
    this.dataService
      .post(this.dataService.genUrl(urlConsts.absence, 1), req)
      .subscribe(
        (data) => {
          console.log('Data is', data);
          this.getAbsences();
          this.absenceFormGroup.reset();
        },
        (error: any) => {
          console.error(error.error);
          this.snackbarService.openSnackBar(error.error.desc, 'OK');
        }
      );
  }

  getAllAbsence(month: number) {
    this.dataService
      .get(this.dataService.genUrl(urlConsts.absence, 'attendance', '1', month))
      .subscribe(
        (data: { id: number; from: string; to: string; type: string }[]) => {
          console.log('list is :', data);
          this.absences = data;
        }
      );
  }

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    return day !== 0 && day !== 6;
  };

  allAttendance = (d: Date | null): boolean => {
    const date = d.getDate();
    if (!this.absences) {
      return true;
    }
    if (d.getDay() !== 0 && d.getDay() !== 6) {
      return !this.absences.some((x) => {
        let fromDate = parseInt(x.from.split('/')[0]);
        let toDate = parseInt(x.to.split('/')[0]);
        let fromMonth = parseInt(x.from.split('/')[1]);
        let toMonth = parseInt(x.to.split('/')[1]);
        // console.log(fromDate,toDate,d.getMonth()+1)
        return (
          date >= fromDate &&
          fromMonth === d.getMonth() + 1 &&
          date <= toDate &&
          toMonth === d.getMonth() + 1
        );
      });
    } else {
      return false;
    }
  };

  dateChange($event) {
    console.log($event);
  }

  dateClass() {
    return (d: Date): MatCalendarCellCssClasses => {
      const date = d.getDate();
      if (
        this.absences.some((x) => {
          let fromDate = parseInt(x.from.split('/')[0]);
          let toDate = parseInt(x.to.split('/')[0]);
          let fromMonth = parseInt(x.from.split('/')[1]);
          let toMonth = parseInt(x.to.split('/')[1]);
          return (
            date >= fromDate &&
            fromMonth === d.getMonth() + 1 &&
            date <= toDate &&
            toMonth === d.getMonth() + 1
          );
        })
      ) {
        return 'special-date';
      } else {
        return '';
      }
    };
  }
}
