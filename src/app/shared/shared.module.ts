import { CommonModule } from "@angular/common";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { PatientService } from "./service/patient-service";
import { AddMediciationComponent } from './dialogs/add-mediciation/add-mediciation.component';
import { DeleteMediciationComponent } from './dialogs/delete-mediciation/delete-mediciation.component';
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { PatientToastService } from "./service/patient-toaster-service";


@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        BrowserModule, 
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