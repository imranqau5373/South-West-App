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
    this.patientOneModel.covidSymptons = "No";
    this.patientOneModel.headche = "No";
    this.patientOneModel.vomiting = "No";
    this.patientOneModel.bodyache = "No";
  }

  nextClick(){
    this.router.navigate(['/add-patient-two']);
  }

  
  onChangeInsFrontPic($event : any) {
    this.patientOneModel.insuranceFront = $event.target.files[0];
  }

  
  onChangeIdCardPic($event : any) {
    this.patientOneModel.idCardPicture = $event.target.files[0];
  }

  onChangeInsBacktPic($event : any) {
    this.patientOneModel.insuranceBack = $event.target.files[0];
  }

  submitOne(pageOne : any){
    console.log(this.patientOneModel.maritalStatus);
    this.patientOneModel = pageOne.value;
    this.submitFirst.emit(this.patientOneModel);
    


  }

}
