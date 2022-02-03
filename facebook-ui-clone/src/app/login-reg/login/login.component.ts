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
    let dialogHeight='35%';
    if(window.innerWidth<800){
      dialogHeight='80%';
    }
    this.dialogReturn = this.dialog.open(this.userDialogTemplate,{
      width: dialogHeight,
      data: {name: "dfsdf"},
    });
  }



}
