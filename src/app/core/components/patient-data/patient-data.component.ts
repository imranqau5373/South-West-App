import { Component, OnInit } from '@angular/core';
import { SignaturePad } from 'angular2-signaturepad';
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
    formData.append("aptNumber", this.patientOne.aptNumber)
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
    formData.append('medicationList',JSON.stringify(this.patientOne.medicationList))
    formData.append("smoke", this.patientOne.smoke);
    formData.append("smokeExplain", this.patientOne.smokeExplain);
    formData.append("tobacco", this.patientOne.tobacco);
    formData.append("tobaccoExplain", this.patientOne.tobaccoExplain);
    formData.append("alcohol", this.patientOne.alcohol);
    formData.append("alcoholExplain", this.patientOne.alcoholExplain);
    formData.append("drugs", this.patientOne.drugs);
    formData.append("drugsExplain", this.patientOne.drugsExplain);
    formData.append("yearlyPhysical", this.patientOne.yearlyPhysical);
    formData.append("yearlyPhysicalExplain", this.patientOne.yearlyPhysicalExplain)
    formData.append("covid", this.patientOne.covid);
    formData.append("coughCongestion", this.patientOne.coughCongestion);
    formData.append("breathShortness", this.patientOne.breathShortness);
    formData.append("fever", this.patientOne.fever);
    formData.append("headche", this.patientOne.headche);
    formData.append("vomiting", this.patientOne.vomiting);
    formData.append("bodyache", this.patientOne.bodyache);
    formData.append("covidSymptons", this.patientOne.covidSymptons);
    formData.append("covidTesting", this.patientMainModel.covidTesting);
    formData.append("pharmacyName", this.patientOne.pharmacyName);
    formData.append("streetPharmacy", this.patientOne.streetPharmacy);
    formData.append("crossIntersectin", this.patientOne.crossIntersectin);
    formData.append("zipcodePharmacy", this.patientOne.zipcodePharmacy);
    formData.append("familyMedicialHistory", this.patientOne.familyMedicialHistory);
    formData.append("signatureImg", this.patientMainModel.signatureImg);

  }

  setFormDataPatientSecond(formData :FormData ){
    formData.append("emergencyName", this.patientOne.emergencyName);
    formData.append("emergencyLast", this.patientOne.emergencyLast);
    formData.append("emergencyPhone", this.patientOne.emergencyPhone);
    formData.append("medicalRecord", this.patientOne.medicalRecord);
    formData.append("contactFirstName", this.patientOne.contactFirstName);
    formData.append("contactLastName", this.patientOne.contactLastName);
    formData.append("contactPhone", this.patientOne.contactPhone);
    formData.append("contactRelation", this.patientOne.contactRelation);
    formData.append("hearAboutUs", this.patientOne.hearAboutUs);
  }

  setMainPatientData(formData : FormData){
    formData.append("firstName", this.patientMainModel.firstName);
    formData.append("createdDate",  new Date().toLocaleDateString('en-us', { year: 'numeric', month: '2-digit', day: '2-digit' } ));
    formData.append("middleName", this.patientMainModel.middleName);
    formData.append("lastName", this.patientMainModel.lastName);
    formData.append("mrnNumber", this.patientMainModel.mrnNumber);
    formData.append("dateOfBirth", new Date(this.patientMainModel.dateOfBirth).toLocaleDateString('en-us', { year: 'numeric', month: '2-digit', day: '2-digit' }) );
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
   /*  if(this.patientMainModel.reasonForVisit == "Covid"){
      formData.append("covidTesting", this.patientMainModel.covidTesting);
    } */
    else if(this.patientMainModel.reasonForVisit == "Other"){
      formData.append("reasonForVisitOther", this.patientMainModel.reasonForVisitOther);
    }
    else if(this.patientMainModel.reasonForVisit == "Immigration"){
      formData.append("cityOfBirth", this.patientMainModel.cityOfBirth);
      formData.append("countryOfBirth", this.patientMainModel.countryOfBirth);
      formData.append("imgNumber", this.patientMainModel.imgNumber);
      formData.append("uscisNumber", this.patientMainModel.uscisNumber);
      formData.append("interpreter", this.patientMainModel.interpreter);
      formData.append("interpreterFName", this.patientMainModel.interpreterFName)
      formData.append("interpreterLName", this.patientMainModel.interpreterLName)
      formData.append("interpreterBusiness", this.patientMainModel.interpreterBusiness)
      formData.append("cityTownVillage", this.patientMainModel.cityTownVillage)

    }
    else if (this.patientMainModel.reasonForVisit == 'dotPhysical') {
      formData.append("driverLicenseNumber", this.patientMainModel.driverLicenseNumber)
      formData.append("licenseState",this.patientMainModel.licenseState)
      formData.append("clpCdl", this.patientMainModel.clpCdl)
      formData.append("usdotFmcsa", this.patientMainModel.usdotFmcsa)
      formData.append("driverPhone", this.patientMainModel.driverPhone)
      formData.append("driverIdVerifiedBy", this.patientMainModel.driverIdVerifiedBy)
      formData.append("driverSurgery", this.patientMainModel.driverSurgery)
      formData.append("driverSurgeryExplain", this.patientMainModel.driverSurgeryExplain)
      formData.append("driverMedicine", this.patientMainModel.driverMedicine)
      formData.append("driverMedicineExplain", this.patientMainModel.driverMedicineExplain)
      formData.append("head", this.patientMainModel.head)
      formData.append("seizures", this.patientMainModel.seizures) 
      formData.append("eye", this.patientMainModel.eye)
      formData.append("ear", this.patientMainModel.ear)
      formData.append("heart", this.patientMainModel.heart)
      formData.append("pace", this.patientMainModel.pace)
      formData.append("highBlood", this.patientMainModel.highBlood)
      formData.append("highCholestrol", this.patientMainModel.highCholestrol)
      formData.append("breath", this.patientMainModel.breath)
      formData.append("lung", this.patientMainModel.lung)
      formData.append("kidney", this.patientMainModel.kidney)
      formData.append("stomach", this.patientMainModel.stomach)
      formData.append("bloodSugar", this.patientMainModel.bloodSugar)
      formData.append("insulin", this.patientMainModel.insulin)
      formData.append("mentalHealth", this.patientMainModel.mentalHealth)
      formData.append("fainting", this.patientMainModel.fainting)
      formData.append("dizzy", this.patientMainModel.dizzy)
      formData.append("weightLoss", this.patientMainModel.weightLoss)
      formData.append("stroke", this.patientMainModel.stroke)
      formData.append("useLimit", this.patientMainModel.useLimit)
      formData.append("neck", this.patientMainModel.neck)
      formData.append("bone", this.patientMainModel.bone)
      formData.append("blood", this.patientMainModel.blood)
      formData.append("cancer", this.patientMainModel.cancer)
      formData.append("chronic", this.patientMainModel.chronic)
      formData.append("apnea", this.patientMainModel.apnea)
      formData.append("sleepTest", this.patientMainModel.sleepTest)
      formData.append("hospitalNight", this.patientMainModel.hospitalNight)
      formData.append("brokenBone", this.patientMainModel.brokenBone)
      formData.append("dTobacco", this.patientMainModel.dTobacco)
      formData.append("dAlcohol", this.patientMainModel.dAlcohol)
      formData.append("illegal", this.patientMainModel.illegal)
      formData.append("illegalDrug", this.patientMainModel.illegalDrug)
      formData.append("otherHealth", this.patientMainModel.otherHealth)
      formData.append("otherHealthExplain", this.patientMainModel.otherHealthExplain)
      formData.append("dComment", this.patientMainModel.dComment)
      formData.append("dCommentExplain", this.patientMainModel.dCommentExplain)
    }
    
    if (this.patientMainModel.reasonForVisit == "schoolPhysical") {
      formData.append("grade", this.patientMainModel.grade)
      formData.append("school", this.patientMainModel.school)
    }



    formData.append("lastMammogram", this.patientMainModel.lastMammogram);
    formData.append("lastmenstrualPeriod", this.patientMainModel.lastmenstrualPeriod);
    formData.append("periodDate", new Date(this.patientMainModel.periodDate).toLocaleDateString('en-us', { year: 'numeric', month: '2-digit', day: '2-digit' }) );
    formData.append("breastFeeding", this.patientMainModel.breastFeeding);
    formData.append("pregnant", this.patientMainModel.pregnant);
    formData.append("pregnantMonths", this.patientMainModel.pregnantMonths);

  }

  setFormDataPatientThrid(formData :FormData ){

  }

}
