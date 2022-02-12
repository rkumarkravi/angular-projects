import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CommonServService } from 'src/app/service/common-serv.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  brandingName: string = 'facebook clone';
  @ViewChild('signupdialog')
  userDialogTemplate!: TemplateRef<any>;
  dialogReturn: any;
  loginForm: FormGroup = new FormGroup({});
  constructor(
    private dialog: MatDialog,
    private commonServ: CommonServService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      emailId: new FormControl('', [Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.pattern('[a-zA-Z 0-9]*'),
      ]),
    });
  }

  openDialog() {
    let dialogHeight = '35%';
    if (window.innerWidth < 800) {
      dialogHeight = '80%';
    }
    this.dialogReturn = this.dialog.open(this.userDialogTemplate, {
      width: dialogHeight,
      data: { name: 'dfsdf' },
    });
  }

  login(loginForm: FormGroup) {
    console.log('login submitted!' + loginForm.valid);
    if (!loginForm.valid) {
    } else {
      this.commonServ.loginned = true;
      this.commonServ.loginUser = loginForm.get('emailId')?.value;
      this.router.navigateByUrl('/main-timeline');
    }
  }
  forgotPass() {
    alert('Working on this impl!!');
  }
}
