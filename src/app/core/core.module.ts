import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SwNavbarComponent } from './components/nav-bar/sw-navbar.component';
import { AddPatientOneComponent } from './components/add-patient-one/add-patient-one.component';
import { AddPatientTwoComponent } from './components/add-patient-two/add-patient-two.component';
import { AddPatientThreeComponent } from './components/add-patient-three/add-patient-three.component';
import { HomeComponent } from './components/home/home.component';
import { ExistingPatientComponent } from './components/existing-patient/existing-patient.component';
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { PatientDataComponent } from './components/patient-data/patient-data.component';
import { SignaturePadModule } from "angular2-signaturepad";
import { MainPatientComponent } from './components/main-patient/main-patient.component';
import { ExistingPatientDataComponent } from './components/existing-patient-data/existing-patient-data.component';
import { NewMainPatientComponent } from './components/new-main-patient/new-main-patient.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
    imports: [
      FormsModule,
      CommonModule,
      BrowserModule, 
      SignaturePadModule,
      RouterModule.forChild([])
    ],
    declarations: [  
    SwNavbarComponent,
    AddPatientOneComponent,
    AddPatientTwoComponent, 
    AddPatientThreeComponent, 
    HomeComponent, 
    ExistingPatientComponent, 
    PatientDataComponent, MainPatientComponent, ExistingPatientDataComponent, NewMainPatientComponent, PageNotFoundComponent

  ],
    exports: [
        SwNavbarComponent
    ]
  })
  export class CoreModule { }