import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required]),
    pass: new FormControl('', [Validators.required]),
    uname: new FormControl('', [Validators.required]),
    mobile: new FormControl('', [Validators.required]),
  });
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<LoginComponent>,
    private dataService: DataService
  ) {}

  ngOnInit() {}

  createUser() {
    this.dataService.post("user/create",this.loForm.value).subscribe(
      (data)=>{
        console.log(data);
      }
    )
  }
}
