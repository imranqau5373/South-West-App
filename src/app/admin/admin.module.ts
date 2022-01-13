import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { SwNavbarComponent } from "../core/components/nav-bar/sw-navbar.component";
import { GetAllNewpatientsComponent } from './components/get-all-newpatients/get-all-newpatients.component';
import { GetAllExistingpatientsComponent } from './components/get-all-existingpatients/get-all-existingpatients.component';
import { DataTablesModule } from "angular-datatables";


@NgModule({
    imports: [
      FormsModule,
      CommonModule,
      BrowserModule, 
      DataTablesModule,
      RouterModule.forChild([])
    ],
    declarations: [  

  
    GetAllNewpatientsComponent, GetAllExistingpatientsComponent
  ],
    exports: [
    ]
  })
  export class AdminModule { }