import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { SignaturePadModule } from 'angular2-signaturepad';
import { ToastrModule } from 'ngx-toastr';
import { AdminModule } from './admin/admin.module';
import { AdminDashboardComponent } from './admin/components/admin-dashboard/admin-dashboard.component';
import { GetAllExistingpatientsComponent } from './admin/components/get-all-existingpatients/get-all-existingpatients.component';
import { GetAllNewpatientsComponent } from './admin/components/get-all-newpatients/get-all-newpatients.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPatientOneComponent } from './core/components/add-patient-one/add-patient-one.component';
import { AddPatientThreeComponent } from './core/components/add-patient-three/add-patient-three.component';
import { AddPatientTwoComponent } from './core/components/add-patient-two/add-patient-two.component';
import { ExistingPatientDataComponent } from './core/components/existing-patient-data/existing-patient-data.component';
import { ExistingPatientComponent } from './core/components/existing-patient/existing-patient.component';
import { HomeComponent } from './core/components/home/home.component';
import { MainPatientComponent } from './core/components/main-patient/main-patient.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { PatientDataComponent } from './core/components/patient-data/patient-data.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import { CallbackUrlComponent } from './admin/components/callback-url/callback-url.component';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    CoreModule,
    AdminModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right'
    }),
    RouterModule.forChild([
      {
        path:"*",
        component: PageNotFoundComponent
      },
      {
        path:'',
        component : HomeComponent
      },
      {
        path:'admin',
        component : AdminDashboardComponent
      },
      {
        path:'add-patient-one',
        component : PatientDataComponent
      },
      {
        path:'add-patient-two',
        component : AddPatientTwoComponent
      },
      {
        path:'add-patient-three',
        component : AddPatientThreeComponent
      },
      {
        path:'existing-patient',
        component : ExistingPatientComponent
      },
      {
        path:'main-patient-existing',
        component : ExistingPatientDataComponent
      },
      {
        path:'admin/all-new-patients',
        component : GetAllNewpatientsComponent
      },
      {
        path:'admin/all-existing-patients',
        component : GetAllExistingpatientsComponent
      },
      {
        path:'admin/callback-url/:token',
        component : CallbackUrlComponent
      },

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
