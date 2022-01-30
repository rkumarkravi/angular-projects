import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  brandingName:string='facebook';
  @ViewChild("signupdialog")
  userDialogTemplate!: TemplateRef<any>;
  dialogReturn: any;
  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {

  }

  openDialog(){
    this.dialogReturn = this.dialog.open(this.userDialogTemplate,{
      width: '35%',
      data: {name: "dfsdf"},
    });
  }



}
