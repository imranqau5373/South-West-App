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
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
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
import { MatDialogModule } from "@angular/material/dialog";
import {TranslateModule, TranslateService} from "@ngx-translate/core";
@NgModule({
    imports: [
      FormsModule,
      CommonModule,
      BrowserModule, 
      SignaturePadModule,
      NgbModule,
      MatMenuModule,
      MatButtonModule,
      MatIconModule,
      MatCardModule,
      TranslateModule,
      MatTabsModule,
      MatSidenavModule,
      MatListModule,
      MatToolbarModule,
      MatInputModule,
      MatTableModule,
      MatPaginatorModule,
      MatSortModule,
      MatProgressSpinnerModule,
      MatDialogModule,
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