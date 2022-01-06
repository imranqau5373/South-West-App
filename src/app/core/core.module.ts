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

@NgModule({
    imports: [
      FormsModule,
      CommonModule,
      BrowserModule, 
      RouterModule.forChild([])
    ],
    declarations: [  
    SwNavbarComponent, AddPatientOneComponent, AddPatientTwoComponent, AddPatientThreeComponent, HomeComponent, ExistingPatientComponent, PatientDataComponent
  ],
    exports: [
        SwNavbarComponent
    ]
  })
  export class CoreModule { }