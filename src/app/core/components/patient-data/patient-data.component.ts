import { Component, OnInit } from '@angular/core';
import { Document, Packer, Paragraph, TextRun } from "docx";
import * as fs from "fs";
import { Observable } from 'rxjs';
import { PatientService } from 'src/app/shared/service/patient-service';

@Component({
  selector: 'app-patient-data',
  templateUrl: './patient-data.component.html',
  styleUrls: ['./patient-data.component.css']
})
export class PatientDataComponent implements OnInit {
  firstPage = true;
  secondPage = false;
  thirdPage = false;
  finishPage = false;
  patientOne : any = {};
  patientTwo : any = {};
  patientData!: Observable<any>;
  constructor(private patientService : PatientService) { }

  ngOnInit(): void {
  }

  firstPageSelected($event:any){
    debugger;
    this.firstPage = false;
    this.secondPage = true;
    this.thirdPage = false;
    this.finishPage = false;
    this.patientOne = $event;
  }

  secondPageSubmit($event:any){
    this.firstPage = false;
    this.secondPage = false;
    this.thirdPage = true;
    this.finishPage = false;
  }

  thirdPageSubmit($event:any){
    this.firstPage = false;
    this.secondPage = false;
    this.thirdPage = false;
    this.finishPage = true;
    this.patientData = this.patientService.createNewPatientDocument(this.patientOne);
    this.patientData.subscribe(result => console.log(result));
    console.log('data is coming form the server');
  }

  createWordDocument(){

  }

}
