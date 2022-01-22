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
  constructor() { }

  ngOnInit(): void {
    this.patientMainModel.insurance = "No";
    this.patientMainModel.adult = "Yes";
  }

  submit($patient:any){
    this.submitMain.emit(this.patientMainModel);

  }

  onChangeGuardianCardPic($event:any){
    this.patientMainModel.guardianIdCardPicture = $event.target.files[0];

  }

  dateChange($event:any){
    var age18Date = new Date();
    const age = 18 * 365;
    age18Date.setDate(age18Date.getDate() - age);
    var setDate = new Date($event.target.value);
    if(setDate >= age18Date){
      this.patientMainModel.adult = "No";
    }
    else{
      this.patientMainModel.adult = "Yes";
      this.patientMainModel.guardianName = this.patientMainModel.guardianRelation = this.patientMainModel.guardianIdCardPicture = "";
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

}
