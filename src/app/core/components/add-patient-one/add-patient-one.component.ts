import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { PatientOne } from 'src/app/shared/models/patient-one';

@Component({
  selector: 'app-add-patient-one',
  templateUrl: './add-patient-one.component.html',
  styleUrls: ['./add-patient-one.component.css']
})
export class AddPatientOneComponent implements OnInit {
  @Input()
  patientOneModel : any = {};
  @Output()
  submitFirst = new EventEmitter<any>();
  showValue : boolean = true;
  constructor(    private router: Router) { }

  ngOnInit(): void {
    this.patientOneModel.gender = "Male";
    this.patientOneModel.surgery = "No";
    this.patientOneModel.alergic = "No";
    this.patientOneModel.medicalProblem = "No";
    this.patientOneModel.smoke = "No";
    this.patientOneModel.tobacco = "No";
    this.patientOneModel.alcohol = "No";
    this.patientOneModel.drugs = "No";
    this.patientOneModel.yearlyPhysical = "No";
    this.patientOneModel.covid = "No";
    this.patientOneModel.coughCongestion = "No";
    this.patientOneModel.breathShortness = "No";
    this.patientOneModel.fever = "No";
  }

  nextClick(){
    this.router.navigate(['/add-patient-two']);
  }

  submitOne(pageOne : any){
    console.log(pageOne.value);
    this.patientOneModel = pageOne.value;
    this.submitFirst.emit(this.patientOneModel);

  }

}
