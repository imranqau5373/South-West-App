import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SignaturePad } from 'angular2-signaturepad';

@Component({
  selector: 'app-add-patient-two',
  templateUrl: './add-patient-two.component.html',
  styleUrls: ['./add-patient-two.component.css']
})
export class AddPatientTwoComponent implements OnInit {
  @Input()
  patientTwoModel : any = {};
  @Output()
  submitSecond = new EventEmitter<any>();


  constructor(    private router: Router ) { }

  ngOnInit(): void {
    this.patientTwoModel.medicalRecord = "No";
  }

  nextClick(){
    this.router.navigate(['/add-patient-three']);
  }

  submitTwo(pageTwo : any){
    this.patientTwoModel = pageTwo.value;

    this.submitSecond.emit(this.patientTwoModel);
  }





}
