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
  firstPage = false;
  secondPage = false;
  thirdPage = false;
  finishPage = false;
  mainPage = true;
  patientOne : any = {};
  patientTwo : any = {};
  patientThreeModel : any = {};
  patientMainModel : any = {};
  patientData!: Observable<any>;
  constructor(private patientService : PatientService) { }

  ngOnInit(): void {

  }

  mainPageSubmitted($event:any){
    this.mainPage = false;
    this.patientOne.insurance = this.patientMainModel.insurance;
    this.patientOne.adult = this.patientMainModel.adult;
    this.firstPage = true;
    this.secondPage = false;
    this.thirdPage = false;
    this.finishPage = false;
    
  }

  firstPageSelected($event:any){
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
  }

  thirdPageSubmit($event:any){
    const formData = new FormData();
    this.firstPage = false;
    this.secondPage = false;
    this.thirdPage = false;
    this.finishPage = true;
    this.setMainPatientData(formData);
    this.setFormDataPatientOne(formData);
    //this.setInsuranceData(formData);
    this.setFormDataPatientSecond(formData);
    this.setFormDataPatientThrid(formData);
    this.patientData = this.patientService.createNewPatientDocument(formData);
    this.patientData.subscribe(result => console.log(result));
    console.log('data is coming form the server');
  }

  setFormDataPatientOne(formData :FormData ){
    formData.append("inputAddress", this.patientOne.inputAddress);
    formData.append("age", this.patientOne.age);
    formData.append("apt", this.patientOne.apt);
    formData.append("city", this.patientOne.city);
    formData.append("race", this.patientOne.race);
    formData.append("state", this.patientOne.state);
    formData.append("zipCode", this.patientOne.zipCode);
    
    formData.append("maritalStatus", this.patientOne.maritalStatus);
    formData.append("occupation", this.patientOne.occupation);
    formData.append("mobilePhoneNo", this.patientOne.mobilePhoneNo);
    formData.append("dayTimePhoneNo", this.patientOne.dayTimePhoneNo);
    formData.append("ssn", this.patientOne.ssn);
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
    formData.append("yearlyPhysical", this.patientOne.yearlyPhysical);
    formData.append("covid", this.patientOne.covid);
    formData.append("coughCongestion", this.patientOne.coughCongestion);
    formData.append("breathShortness", this.patientOne.breathShortness);
    formData.append("fever", this.patientOne.fever);
    formData.append("headche", this.patientOne.headche);
    formData.append("vomiting", this.patientOne.vomiting);
    formData.append("bodyache", this.patientOne.bodyache);
    formData.append("covidSymptons", this.patientOne.covidSymptons);
    formData.append("covidTesting", this.patientOne.covidTesting);
    formData.append("pharmacyName", this.patientOne.pharmacyName);
    formData.append("streetPharmacy", this.patientOne.streetPharmacy);
    formData.append("crossIntersectin", this.patientOne.crossIntersectin);
    formData.append("zipcodePharmacy", this.patientOne.zipcodePharmacy);
    formData.append("familyMedicialHistory", this.patientOne.familyMedicialHistory);
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

  setMainPatientData(formData : FormData){
    formData.append("firstName", this.patientMainModel.firstName);
    formData.append("createdDate",  new Date().toString());
    formData.append("middleName", this.patientMainModel.middleName);
    formData.append("lastName", this.patientMainModel.lastName);
    formData.append("mrnNumber", this.patientMainModel.mrnNumber);
    formData.append("dateOfBirth", this.patientMainModel.dateOfBirth);
    formData.append("reasonForVisit", this.patientMainModel.reasonForVisit);
    formData.append("adult", this.patientMainModel.adult);
    formData.append("insurance", this.patientMainModel.insurance);
    formData.append("email", this.patientMainModel.email);
    formData.append("gender", this.patientMainModel.gender);
    if(this.patientMainModel.insurance == "Yes"){
      formData.append("insuranceBackPath", this.patientMainModel.insuranceBack.name+'-'+Date.now());
      formData.append("insuranceFrontFileName", this.patientMainModel.insuranceFront.name);
      formData.append("insuranceBackFileName", this.patientMainModel.insuranceBack.name);
      formData.append("insuranceForntPath", this.patientMainModel.insuranceFront.name+'-'+Date.now());
      formData.append("file", this.patientMainModel.insuranceFront, this.patientMainModel.insuranceFront.name);
      formData.append("file", this.patientMainModel.insuranceBack, this.patientMainModel.insuranceBack.name);
      if(this.patientMainModel.adult == "Yes"){
        formData.append("idCardPicturePath", this.patientMainModel.idCardPicture.name+'-'+Date.now());
        formData.append("idCardPictureName", this.patientMainModel.idCardPicture.name); 
        formData.append("file", this.patientMainModel.idCardPicture, this.patientMainModel.idCardPicture.name); 
      }
    }
    // else{
    //   formData.append("idCardPicturePath", this.patientOne.idCardPicture.name+'-'+Date.now());
    //   formData.append("idCardPictureName", this.patientOne.idCardPicture.name); 
    //   formData.append("file", this.patientOne.idCardPicture, this.patientOne.idCardPicture.name);
    // }
    if(this.patientMainModel.adult == "Yes" && this.patientMainModel.insurance == "No"){
      formData.append("idCardPicturePath", this.patientOne.idCardPicture.name+'-'+Date.now());
      formData.append("idCardPictureName", this.patientOne.idCardPicture.name); 
      formData.append("file", this.patientOne.idCardPicture, this.patientOne.idCardPicture.name);
    }
    if(this.patientMainModel.adult == "No"){
      formData.append("guardianIdPath", this.patientMainModel.guardianIdCardPicture.name+'-'+Date.now());
      formData.append("guardianIdFileName", this.patientMainModel.guardianIdCardPicture.name);
      formData.append("file", this.patientMainModel.guardianIdCardPicture);
      formData.append("guardianName", this.patientMainModel.guardianName);
      formData.append("guardianRelation", this.patientMainModel.guardianRelation);
    }
    if(this.patientMainModel.reasonForVisit == "Covid"){
      formData.append("covidTesting", this.patientMainModel.covidTesting);
    }
    else if(this.patientMainModel.reasonForVisit == "Other"){
      formData.append("reasonForVisitOther", this.patientMainModel.reasonForVisitOther);
    }
    else if(this.patientMainModel.reasonForVisit == "Immigration"){
      formData.append("cityOfBirth", this.patientMainModel.cityOfBirth);
      formData.append("countryOfBirth", this.patientMainModel.countryOfBirth);
      formData.append("imgNumber", this.patientMainModel.imgNumber);

    }
    formData.append("lastMammogram", this.patientMainModel.lastMammogram);
    formData.append("lastmenstrualPeriod", this.patientMainModel.lastmenstrualPeriod);
    formData.append("periodDate", this.patientMainModel.periodDate);
    formData.append("breastFeeding", this.patientMainModel.breastFeeding);
    formData.append("pregnant", this.patientMainModel.pregnant);
    formData.append("pregnantMonths", this.patientMainModel.pregnantMonths);

  }

  setFormDataPatientThrid(formData :FormData ){

  }

}
