import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EmailValidator, FormControl, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { debug } from 'console';
import { AddMediciationComponent } from 'src/app/shared/dialogs/add-mediciation/add-mediciation.component';
import { PatientService } from 'src/app/shared/service/patient-service';
import { PatientToastService } from 'src/app/shared/service/patient-toaster-service';
import { resourceLimits } from 'worker_threads';
import { Router } from '@angular/router';
import { data } from 'jquery';

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
    this.patientMainModel.interpreter ="No";
    this.patientMainModel.clpCdl ="No";
    this.patientMainModel.usdotFmcsa ="Notsure"; 
    this.patientMainModel.driverSurgery ="Notsure";
    this.patientMainModel.driverMedicine = "Notsure";
    this.patientMainModel.head = "Notsure";
    this.patientMainModel.seizures = "Notsure";
    this.patientMainModel.eye = "Notsure";
    this.patientMainModel.ear = "Notsure";
    this.patientMainModel.heart = "Notsure";
    this.patientMainModel.pace = "Notsure";
    this.patientMainModel.highBlood = "Notsure";
    this.patientMainModel.highCholestrol = "Notsure";
    this.patientMainModel.breath = "Notsure";
    this.patientMainModel.lung = "Notsure";
    this.patientMainModel.kidney = "Notsure";
    this.patientMainModel.stomach = "Notsure";
    this.patientMainModel.bloodSugar = "Notsure";
    this.patientMainModel.insulin = "Notsure";
    this.patientMainModel.mentalHealth = "Notsure";
    this.patientMainModel.fainting = "Notsure";
    this.patientMainModel.dizzy = "Notsure";
    this.patientMainModel.weightLoss = "Notsure";
    this.patientMainModel.stroke = "Notsure";
    this.patientMainModel.useLimit = "Notsure";
    this.patientMainModel.neck = "Notsure";
    this.patientMainModel.bone = "Notsure";
    this.patientMainModel.blood = "Notsure";
    this.patientMainModel.cancer = "Notsure";
    this.patientMainModel.chronic = "Notsure";
    this.patientMainModel.apnea = "Notsure";
    this.patientMainModel.sleepTest = "Notsure";
    this.patientMainModel.hospitalNight = "Notsure";
    this.patientMainModel.brokenBone = "Notsure";
    this.patientMainModel.dTobacco= "Notsure";
    this.patientMainModel.dAlcohol = "Notsure";
    this.patientMainModel.illegal = "Notsure";
    this.patientMainModel.illegalDrug = "Notsure";
    this.patientMainModel.otherHealth = "Notsure";
    this.patientMainModel.dComment = "Notsure";
    this.patientMainModel.stdAlergic = "No"
    this.patientMainModel.stdAsthma = "No"
    this.patientMainModel.stdBreathness = "No"
   this.patientMainModel.stdChestPainEx = "No"
   this.patientMainModel.stdDenied = "No"
   this.patientMainModel.stdDizzy = "No"
    this.patientMainModel.stdEyeProblem = "No"
    this.patientMainModel.stdFamilyHeartProblem = "No"
     this.patientMainModel.stdFracturedBone= "No"
     this.patientMainModel.stdHeadache = "No"
     this.patientMainModel.stdHeadInjury = "No"
     this.patientMainModel.stdHeartMurmur = "No"
     this.patientMainModel.stdHeartProblemDeath= "No"
     this.patientMainModel.stdHeartTest= "No"
     this.patientMainModel.stdHighBlood = "No"
     this.patientMainModel.stdHospitalized= "No"
    this.patientMainModel.stdIllness= "No"
    this.patientMainModel.stdIllnessInHeat= "No"
    this.patientMainModel.stdInjurySwelling= "No"
      this.patientMainModel.stdMemoryLoss= "No"
     this.patientMainModel.stdMissingOrgan= "No"
    this.patientMainModel.stdMusclePain= "No"
     this.patientMainModel.stdNumbness= "No"
      this.patientMainModel.stdPassedOutEx= "No"
     this.patientMainModel.stdPinchedNerve= "No"
      this.patientMainModel.stdProtective = "No"
     this.patientMainModel.stdSeasonalAlergy = "No"
     this.patientMainModel.stdSeizure = "No"
    this.patientMainModel.stdSickleCell = "No"
     this.patientMainModel.stdSkinProblem = "No"
    this.patientMainModel.stdSkipHeartbeatEx = "No"
 this.patientMainModel.stdStress = "No"
  this.patientMainModel.stdSurgery = "No"
   this.patientMainModel.stdTakingMed= "No"
    this.patientMainModel.stdTiredQuicklyEx = "No"
     this.patientMainModel.stdUnderDrCare = "No"
      this.patientMainModel.stdViralInfection = "No"
       this.patientMainModel.stdWeight = "No"
        
  
    
  }

  submit($patient:any){
    debugger;
    
    this.patientService.getCheckEmail(this.patientMainModel.email).subscribe((result => {
     
      if (result && result.error){
      this.toastService.showError("Email already exist.");
      }
      else {
         this.submitMain.emit(this.patientMainModel);
          
      }
      
     }),err => {
       debugger;
      
      
     });
    
    
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
