import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule, DatePipe } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { SwNavbarComponent } from "../core/components/nav-bar/sw-navbar.component";
import { GetAllNewpatientsComponent } from './components/get-all-newpatients/get-all-newpatients.component';
import { GetAllExistingpatientsComponent } from './components/get-all-existingpatients/get-all-existingpatients.component';
import { DataTablesModule } from "angular-datatables";
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import {MatTableModule} from '@angular/material/table'
import {MatInputModule} from '@angular/material/input';
import { MatListModule } from "@angular/material/list";
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from "@angular/material/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatPaginatorModule } from "@angular/material/paginator";
import { CallbackUrlComponent } from './components/callback-url/callback-url.component';
import { MatSelectModule } from "@angular/material/select";
import { MatSortModule } from "@angular/material/sort";
import { MatButtonModule } from "@angular/material/button";
@NgModule({
    imports: [
      FormsModule,
      ReactiveFormsModule,
      CommonModule,
      MatButtonModule,
      BrowserModule, 
      DataTablesModule,
      MatTableModule,
      MatInputModule,
      MatSelectModule,
      MatSortModule,
      MatListModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatFormFieldModule,
      BrowserAnimationsModule,
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