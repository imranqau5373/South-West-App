import { CommonModule } from "@angular/common";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { PatientService } from "./service/patient-service";
import { AddMediciationComponent } from './dialogs/add-mediciation/add-mediciation.component';
import { DeleteMediciationComponent } from './dialogs/delete-mediciation/delete-mediciation.component';
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { PatientToastService } from "./service/patient-toaster-service";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatDialogModule } from "@angular/material/dialog";


@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        BrowserModule, 
        MatFormFieldModule,
        MatDialogModule,
        HttpClientModule
    ],
    declarations: [
    
    AddMediciationComponent,
         DeleteMediciationComponent
  ],
    exports: [
      
    ],
    providers: [
        PatientService,
        PatientToastService
    ]
  })
  export class SharedModule { }