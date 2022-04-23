import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loForm:FormGroup=new FormGroup(
    {
      "emailId":new FormControl("",[Validators.required]),
      "password":new FormControl("",[Validators.required]),
      "uname":new FormControl("",[Validators.required]),
      "mobile":new FormControl("",[Validators.required])
    }
  )
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private dialogRef:MatDialogRef<LoginComponent>) { }

  ngOnInit() {
  }

}
