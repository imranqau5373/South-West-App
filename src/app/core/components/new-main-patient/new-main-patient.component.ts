import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-main-patient',
  templateUrl: './new-main-patient.component.html',
  styleUrls: ['./new-main-patient.component.css']
})
export class NewMainPatientComponent implements OnInit {

  @Input()
  patientMainModel : any = {};
  @Output()
  submitMain = new EventEmitter<any>();
  isFemaleAge = false;
  constructor() { }

  ngOnInit(): void {
    this.patientMainModel.insurance = "No";
    this.patientMainModel.adult = "Yes";
    this.patientMainModel.gender = "Male";
    this.patientMainModel.breastFeeding = "No";
    this.patientMainModel.pregnant = "No";
    
  }

  submit($patient:any){
    this.submitMain.emit(this.patientMainModel);

  }

  onChangeGuardianCardPic($event:any){
    this.patientMainModel.guardianIdCardPicture = $event.target.files[0];

  }

  dateChange($event:any){
    var age18Date = new Date();
    var age15Date = new Date();
    const age = 18 * 365;
    const age15 = 15 * 365;
    age18Date.setDate(age18Date.getDate() - age);
    age15Date.setDate(age15Date.getDate() - age15);
    var setDate = new Date($event.target.value);
    if(setDate >= age18Date){
      this.patientMainModel.adult = "No";
    }
    else{
      this.patientMainModel.adult = "Yes";
      this.patientMainModel.guardianName = this.patientMainModel.guardianRelation = this.patientMainModel.guardianIdCardPicture = "";
    }
    if(setDate > age15Date){
      this.isFemaleAge = false;
    }
    else{
      this.isFemaleAge = true;
    }

  }

  onChangeInsFrontPic($event : any) {
    this.patientMainModel.insuranceFront = $event.target.files[0];
  }

  onChangeIdCardPic($event : any) {
    this.patientMainModel.idCardPicture = $event.target.files[0];
  }

  onChangeInsBacktPic($event : any) {
    this.patientMainModel.insuranceBack = $event.target.files[0];
  }

  changeReasonForVisit($event:any){
    if($event.target.value != "Other"){
      this.patientMainModel.reasonForVisitOther = ""; 
    }

  }
  changeLastmenstrualPeriod($event:any){
    if($event.target.value != "Other"){
      this.patientMainModel.reasonForVisitOther = ""; 
    }

  }

}
