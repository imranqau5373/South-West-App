import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { debug } from 'console';
import { AddMediciationComponent } from 'src/app/shared/dialogs/add-mediciation/add-mediciation.component';
import { PatientService } from 'src/app/shared/service/patient-service';
import { PatientToastService } from 'src/app/shared/service/patient-toaster-service';

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
  constructor(private patientService : PatientService,
    private toastService : PatientToastService) { }
  title = 'appBootstrap';

  closeResult: string | undefined;
  ngOnInit(): void {
    this.patientMainModel.insurance = "No";
    this.patientMainModel.adult = "Yes";
    this.patientMainModel.gender = "Male";
    this.patientMainModel.breastFeeding = "No";
    this.patientMainModel.pregnant = "No";
    
  }

  submit($patient:any){
    debugger;
    this.submitMain.emit(this.patientMainModel);
    // this.patientService.getCheckMRNNumber(this.patientMainModel.mrnNumber).subscribe((result => {
   
    // }),err => {
    //   this.toastService.showError("MRN number already exist.");
    // });
    
    

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

  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
