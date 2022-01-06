import { CommonModule } from "@angular/common";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { PatientService } from "./service/patient-service";


@NgModule({
    imports: [
        HttpClientModule
    ],
    declarations: [
    ],
    exports: [
      
    ],
    providers: [
        PatientService
    ]
  })
  export class SharedModule { }