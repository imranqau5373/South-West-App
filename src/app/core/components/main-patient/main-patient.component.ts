import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-main-patient',
  templateUrl: './main-patient.component.html',
  styleUrls: ['./main-patient.component.css']
})
export class MainPatientComponent implements OnInit {

  
  @Input()
  patientMainModel : any = {};
  @Output()
  submitMain = new EventEmitter<any>();
  isFemaleAge = false;
  isMaleAge = false;
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
    var age50Date = new Date();
    const age = 18 * 365;
    const age50 = 50 * 365;
    age18Date.setDate(age18Date.getDate() - age);
    age50Date.setDate(age50Date.getDate() - age50);
    var setDate = new Date($event.target.value);
    if(setDate >= age18Date){
      this.patientMainModel.adult = "No";
      this.isFemaleAge = false;
    }
    else{
      this.isFemaleAge = true;
      this.patientMainModel.adult = "Yes";
      this.patientMainModel.guardianName = this.patientMainModel.guardianRelation = this.patientMainModel.guardianIdCardPicture = "";
    }
    if(setDate > age50Date){
      this.isMaleAge = false;
    }
    else{
      this.isMaleAge = true;
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
