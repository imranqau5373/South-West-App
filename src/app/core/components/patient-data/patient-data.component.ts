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

  backToPrev($event:any) {
    const formData = new FormData();
    this.setMainPatientData(formData);
    this.mainPage= true
    this.firstPage = false;
    this.secondPage = false;
    this.thirdPage = false;
    this.finishPage = false;
  }
   backToPrevSecond($event:any) {
    const formData = new FormData();
     this.setFormDataPatientOne(formData);
     this.mainPage= false
     this.firstPage = true; 
     this.secondPage = false;
     this.thirdPage = false;
     this.finishPage = false;
  }
  
  backToPrevThird($event:any) {
    const formData = new FormData();
     this.setFormDataPatientSecond(formData);
     this.mainPage= false
     this.firstPage = false; 
     this.secondPage = true; 
     this.thirdPage = false;
     this.finishPage = false;
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
    if(this.patientMainModel.adult == "Yes" && this.patientMainModel.insurance == "No"){
      formData.append("idCardPicturePath", this.patientOne.idCardPicture.name+'-'+Date.now());
      formData.append("idCardPictureName", this.patientOne.idCardPicture.name); 
      formData.append("file", this.patientOne.idCardPicture, this.patientOne.idCardPicture.name);
    }
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
    if (this.patientOne.smoke == 'Yes') {
    formData.append('exSmoker', this.patientOne.exSmoker)
    formData.append('lightSmoker', this.patientOne.lightSmoker)
    formData.append('moderateSmoker', this.patientOne.moderateSmoker)
    formData.append('heavySmoker', this.patientOne.heavySmoker)
    formData.append('varyHeavySmoker', this.patientOne.varyHeavySmoker)
     formData.append('electronicSmoker', this.patientOne.electronicSmoker)
    }
    if (this.patientOne.tobacco == 'Yes') {
      formData.append('socialTbc', this.patientOne.socialTbc)
       formData.append('lessThenAWeek', this.patientOne.lessThenAWeekTbc)
        formData.append('oneCanAweekTbc', this.patientOne.oneCanAweekTbc)
         formData.append('twoOrMoreTbc', this.patientOne.twoOrMoreTbc)
          
    }
    if (this.patientOne.alcohol =='Yes') {
      formData.append('oneDrinkADay', this.patientOne.oneDrinkADay)
      formData.append('twoToThreeDrinksAWeek', this.patientOne.twoToThreeDrinksAWeek)
      formData.append('fiveOrMoreDrinksAWeek', this.patientOne.fiveOrMoreDrinksAWeek)
      formData.append('socialDrinker', this.patientOne.socialDrinker)
    }
    if (this.patientOne.drugs == 'Yes') {
      formData.append('drugTHC',this.patientOne.drugTHC)
      formData.append('drugCOC', this.patientOne.drugCOC)
      formData.append('drugMET',this.patientOne.drugMET)
      formData.append('drugOPI',this.patientOne.drugOPI)
      formData.append('drugPCP',this.patientOne.drugPCP)
      formData.append('drugAMP',this.patientOne.drugAMP)
      formData.append('drugOther',this.patientOne.drugOther)
    }
  }

  setFormDataPatientSecond(formData :FormData ){
    formData.append("emergencyName", this.patientTwo.emergencyName);
    formData.append("emergencyLast", this.patientTwo.emergencyLast);
  
    formData.append("emergencyPhone", this.patientTwo.emergencyPhone);
    formData.append("emergencyRelation", this.patientTwo.emergencyRelation)
    formData.append("medicalRecord", this.patientTwo.medicalRecord);
    formData.append("contactFirstName", this.patientTwo.contactFirstName);
    formData.append("contactLastName", this.patientTwo.contactLastName);
    formData.append("contactPhone", this.patientTwo.contactPhone);
    formData.append("contactRelation", this.patientTwo.contactRelation);
    formData.append("hearAboutUs", this.patientTwo.hearAboutUs);
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
  /*   if(this.patientMainModel.adult == "Yes" && this.patientMainModel.insurance == "No"){
      formData.append("idCardPicturePath", this.patientOne.idCardPicture.name+'-'+Date.now());
      formData.append("idCardPictureName", this.patientOne.idCardPicture.name); 
      formData.append("file", this.patientOne.idCardPicture, this.patientOne.idCardPicture.name);
    } */
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
      formData.append("stdIllness", this.patientMainModel.stdIllness)
      formData.append("stdHospitalized", this.patientMainModel.stdHospitalized)
      formData.append("stdSurgery", this.patientMainModel.stdSurgery)
      formData.append("stdHeartTest", this.patientMainModel.stdHeartTest)
      formData.append("stdPassedOutEx", this.patientMainModel.stdPassedOutEx)
      formData.append("stdChestPainEx", this.patientMainModel.stdChestPainEx)
      formData.append("stdTiredQuicklyEx", this.patientMainModel.stdTiredQuicklyEx)
      formData.append("stdSkipHeartbeatEx", this.patientMainModel.stdSkipHeartbeatEx)
      formData.append("stdHighBlood", this.patientMainModel.stdHighBlood)
      formData.append("stdHeartMurmur", this.patientMainModel.stdHeartMurmur)
      formData.append("stdHeartProblemDeath", this.patientMainModel.stdHeartProblemDeath)
      formData.append("stdFamilyHeartProblem", this.patientMainModel.stdFamilyHeartProblem)
      formData.append("stdViralInfection", this.patientMainModel.stdViralInfection)
      formData.append("stdDenied", this.patientMainModel.stdDenied)
      formData.append("stdHeadInjury", this.patientMainModel.stdHeadInjury)
      formData.append("stdConcussion", this.patientMainModel.stdConcussion)
      formData.append("stdMemoryLoss", this.patientMainModel.stdMemoryLoss)
      formData.append("stdMemoryLossExplain", this.patientMainModel.stdMemoryLossExplain)
      formData.append("stdSeizure", this.patientMainModel.stdSeizure)
      formData.append("stdHeadache", this.patientMainModel.stdHeadache)
      formData.append("stdNumbness", this.patientMainModel.stdNumbness)
      formData.append("stdPinchedNerve", this.patientMainModel.stdPinchedNerve)
      formData.append("stdMissingOrgan", this.patientMainModel.stdMissingOrgan)
      formData.append("stdUnderDrCare", this.patientMainModel.stdUnderDrCare)
      formData.append("stdTakingMed", this.patientMainModel.stdTakingMed)
      formData.append("stdAlergic", this.patientMainModel.stdAlergic)
      formData.append("stdDizzy", this.patientMainModel.stdDizzy)
      formData.append("stdSkinProblem", this.patientMainModel.stdSkinProblem)
      formData.append("stdIllnessInHeat", this.patientMainModel.stdIllnessInHeat)
      formData.append("stdEyeProblem", this.patientMainModel.stdEyeProblem)
      formData.append("stdBreathness", this.patientMainModel.stdBreathness)
      formData.append("stdAsthma", this.patientMainModel.stdAsthma)
      formData.append("stdSeasonalAlergy", this.patientMainModel.stdSeasonalAlergy)
      formData.append("stdProtective", this.patientMainModel.stdProtective)
      formData.append("stdInjurySwelling", this.patientMainModel.stdInjurySwelling)
      formData.append("stdFracturedBone", this.patientMainModel.stdFracturedBone)
      formData.append("stdFracturedHead", this.patientMainModel.stdFracturedHead)
      formData.append("stdFracturedNeck", this.patientMainModel.stdFracturedNeck)
      formData.append("stdFracturedChest", this.patientMainModel.stdFracturedChest)
      formData.append("stdFracturedShoulder", this.patientMainModel.stdFracturedShoulder)
      formData.append("stdFracturedUpperArm", this.patientMainModel.stdFracturedUpperArm)
      formData.append("stdFracturedElbow", this.patientMainModel.stdFracturedElbow)
      formData.append("stdFracturedForearm", this.patientMainModel.stdFracturedForearm)     
      formData.append("stdFracturedWrist", this.patientMainModel.stdFracturedWrist)
      formData.append("stdFracturedHand", this.patientMainModel.stdFracturedHand)
      formData.append("stdFracturedFinger", this.patientMainModel.stdFracturedFinger)
      formData.append("stdFracturedFoot", this.patientMainModel.stdFracturedFoot)
      formData.append("stdFracturedHip", this.patientMainModel.stdFracturedHip)
      formData.append("stdFracturedThigh", this.patientMainModel.stdFracturedThigh)
      formData.append("stdFracturedKnee", this.patientMainModel.stdFracturedKnee)
      formData.append("stdFracturedShin", this.patientMainModel.stdFracturedShin)
      formData.append("stdFracturedAnkle", this.patientMainModel.stdFracturedAnkle)
      formData.append("stdMusclePain", this.patientMainModel.stdMusclePain)
      formData.append("stdWeight", this.patientMainModel.stdWeight)
      formData.append("stdStress", this.patientMainModel.stdStress)
      formData.append("stdSickleCell", this.patientMainModel.stdSickleCell)
      formData.append("stdFirstMenstrual", this.patientMainModel.stdFirstMenstrual)
      formData.append("stdRecentMenstrual", this.patientMainModel.stdRecentMenstrual)
      formData.append("stdMenstrualTime", this.patientMainModel.stdMenstrualTime)
      formData.append("stdLastYearPeriods", this.patientMainModel.stdLastYearPeriods)
      formData.append("stdLongestPeriodTime", this.patientMainModel.stdLongestPeriodTime)
      formData.append("stdTwoTesticle", this.patientMainModel.stdTwoTesticle)
      formData.append("stdTesticularSwelling", this.patientMainModel.stdTesticularSwelling)
      formData.append("stdECG", this.patientMainModel.stdECG)
      formData.append('stdYesExplain', this.patientMainModel.stdYesExplain)
      formData.append('stdHowSevere', this.patientMainModel.stdHowSevere)
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
