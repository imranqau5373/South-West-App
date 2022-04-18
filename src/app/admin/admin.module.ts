import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { SwNavbarComponent } from "../core/components/nav-bar/sw-navbar.component";
import { GetAllNewpatientsComponent } from './components/get-all-newpatients/get-all-newpatients.component';
import { GetAllExistingpatientsComponent } from './components/get-all-existingpatients/get-all-existingpatients.component';
import { DataTablesModule } from "angular-datatables";
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import {MatTableModule} from '@angular/material/table'
import {MatInputModule} from '@angular/material/input';
import { MatListModule } from "@angular/material/list";
import { MatPaginatorModule } from "@angular/material/paginator";
import { CallbackUrlComponent } from './components/callback-url/callback-url.component';
@NgModule({
    imports: [
      FormsModule,
      CommonModule,
      BrowserModule, 
      DataTablesModule,
      MatTableModule,
      MatInputModule,
      MatListModule,
      MatPaginatorModule,
      RouterModule.forChild([])
    ],
    declarations: [  

  
    GetAllNewpatientsComponent, GetAllExistingpatientsComponent, AdminDashboardComponent, CallbackUrlComponent
  ],
    exports: [
    ]
  })
  export class AdminModule { }