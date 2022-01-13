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
  patientThree : any = {};
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
  }

  secondPageSubmit($event:any){
    this.firstPage = false;
    this.secondPage = false;
    this.thirdPage = true;
    this.finishPage = false;
    debugger;
    console.log($event);
  }

  thirdPageSubmit($event:any){
    debugger;
    const formData = new FormData();
    this.firstPage = false;
    this.secondPage = false;
    this.thirdPage = false;
    this.finishPage = true;
    this.setFormDataPatientOne(formData);
    this.setInsuranceData(formData);
    this.setFormDataPatientSecond(formData);
    this.setFormDataPatientThrid(formData);
    this.patientData = this.patientService.createNewPatientDocument(formData);
    this.patientData.subscribe(result => console.log(result));
    console.log('data is coming form the server');
  }

  setFormDataPatientOne(formData :FormData ){
    formData.append("fullName", this.patientOne.fullName);
    formData.append("dateOfBirth", this.patientOne.dateOfBirth);
    formData.append("inputAddress", this.patientOne.inputAddress);
    formData.append("age", this.patientOne.age);
    formData.append("apt", this.patientOne.apt);
    formData.append("city", this.patientOne.city);
    formData.append("race", this.patientOne.race);
    formData.append("state", this.patientOne.state);
    formData.append("zipCode", this.patientOne.zipCode);
    formData.append("gender", this.patientOne.gender);
    formData.append("maritalStatus", this.patientOne.maritalStatus);
    formData.append("occupation", this.patientOne.occupation);
    formData.append("mobilePhoneNo", this.patientOne.mobilePhoneNo);
    formData.append("dayTimePhoneNo", this.patientOne.dayTimePhoneNo);
    formData.append("ssn", this.patientOne.ssn);
    formData.append("email", this.patientOne.email);
    formData.append("surgery", this.patientOne.surgery);
    formData.append("surgeryExplain", this.patientOne.surgeryExplain);
    formData.append("alergic", this.patientOne.alergic);
    formData.append("alergicExplain", this.patientOne.alergicExplain);
    formData.append("medicalProblem", this.patientOne.medicalProblem);
    formData.append("medicalProblemExplain", this.patientOne.medicalProblemExplain);
    formData.append("medicationList", this.patientOne.medicationList);
    formData.append("smoke", this.patientOne.smoke);
    formData.append("smokeExplain", this.patientOne.smokeExplain);
    formData.append("tobacco", this.patientOne.tobacco);
    formData.append("tobaccoExplain", this.patientOne.tobaccoExplain);
    formData.append("alcohol", this.patientOne.alcohol);
    formData.append("alcoholExplain", this.patientOne.alcoholExplain);
    formData.append("drugs", this.patientOne.drugs);
    formData.append("drugsExplain", this.patientOne.drugsExplain);
    formData.append("visitReason", this.patientOne.visitReason);
    formData.append("yearlyPhysical", this.patientOne.yearlyPhysical);
    formData.append("covid", this.patientOne.covid);
    formData.append("coughCongestion", this.patientOne.coughCongestion);
    formData.append("breathShortness", this.patientOne.breathShortness);
    formData.append("fever", this.patientOne.fever);
    formData.append("covidSymptons", this.patientOne.covidSymptons);
    formData.append("covidTesting", this.patientOne.covidTesting);
    formData.append("pharmacyName", this.patientOne.pharmacyName);
    formData.append("streetPharmacy", this.patientOne.streetPharmacy);
    formData.append("crossIntersectin", this.patientOne.crossIntersectin);
    formData.append("zipcodePharmacy", this.patientOne.zipcodePharmacy);
    formData.append("insurance", this.patientOne.insurance);
    formData.append("adult", this.patientOne.adult);
    formData.append("witnessName", this.patientOne.witnessName);
    formData.append("guardianName", this.patientOne.guardianName);
    formData.append("signatureImg", this.patientOne.signatureImg);

  }

  setFormDataPatientSecond(formData :FormData ){
    formData.append("emergencyName", this.patientTwo.emergencyName);
    formData.append("emergencyLast", this.patientTwo.emergencyLast);
    formData.append("emergencyPhone", this.patientTwo.emergencyPhone);
    formData.append("medicalRecord", this.patientTwo.medicalRecord);
    formData.append("contactName", this.patientTwo.contactName);
    formData.append("contactPhone", this.patientTwo.contactPhone);
    formData.append("contactRelation", this.patientTwo.contactRelation);
    formData.append("hearAboutUs", this.patientOne.hearAboutUs);
  }

  setFormDataPatientThrid(formData :FormData ){

  }

  setInsuranceData(formData : FormData){
    debugger;
    formData.append("idCardPicturePath", this.patientOne.idCardPicture.name+'-'+Date.now());
    formData.append("idCardPictureName", this.patientOne.idCardPicture.name);
    if(this.patientOne.insurance == "Yes"){
      formData.append("insuranceBackPath", this.patientOne.insuranceBack.name+'-'+Date.now());
      formData.append("insuranceFrontFileName", this.patientOne.insuranceFront.name);
      formData.append("insuranceBackFileName", this.patientOne.insuranceBack.name);
      formData.append("insuranceForntPath", this.patientOne.insuranceFront.name+'-'+Date.now());
      formData.append("file", this.patientOne.insuranceFront, this.patientOne.insuranceFront.name);
      formData.append("file", this.patientOne.insuranceBack, this.patientOne.insuranceBack.name);  
    }
    formData.append("file", this.patientOne.idCardPicture, this.patientOne.idCardPicture.name);


  }

}
