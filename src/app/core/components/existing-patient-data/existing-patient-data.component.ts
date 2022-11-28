import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/shared/service/patient-service';

@Component({
  selector: 'app-existing-patient-data',
  templateUrl: './existing-patient-data.component.html',
  styleUrls: ['./existing-patient-data.component.css']
})
export class ExistingPatientDataComponent implements OnInit {
  mainPage = true;
  existingPage = false;
  finishPage = false;
  patientMainModel : any = {};
  patientOneModel : any = {};
  constructor(private patientService : PatientService) { }

  ngOnInit(): void {
    this.patientMainModel.insurance = "No";
  }

  mainPageSubmitted($event:any){
    this.mainPage = false;
    this.patientOneModel.insurance = this.patientMainModel.insurance;
    this.patientOneModel.adult = this.patientMainModel.adult;
    this.existingPage = true;
    
  }

  existingPageSubmitted($event:any){
    const formData = new FormData();
    this.existingPage = false;

    this.setMainPatientData(formData);
    this.addressChange(formData);
    this.otherFields(formData);
    this.finishPage = true;
    this.patientService.createExistingPatientDocument(formData)
      .subscribe(result => {
        console.log(result);
        this.patientOneModel = {};
        this.patientMainModel = {};
      });
  }

  setMainPatientData(formData : FormData){
    formData.append("firstName", this.patientMainModel.firstName);
    formData.append("middleName", this.patientMainModel.middleName);
    formData.append("lastName", this.patientMainModel.lastName);
    formData.append("dateOfBirth", this.patientMainModel.dateOfBirth);
    formData.append("reasonForVisit", this.patientMainModel.reasonForVisit);
    formData.append("adult", this.patientMainModel.adult);
    formData.append("insurance", this.patientMainModel.insurance);
    formData.append("email", this.patientMainModel.email);
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
    if(this.patientMainModel.adult == "Yes" && this.patientMainModel.insurance == "No"){
      formData.append("idCardPicturePath", this.patientOneModel.idCardPicture.name+'-'+Date.now());
      formData.append("idCardPictureName", this.patientOneModel.idCardPicture.name); 
      formData.append("file", this.patientOneModel.idCardPicture, this.patientOneModel.idCardPicture.name);
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

    if (this.patientMainModel.reasonForVisit == 'dotPhysical') {
      formData.append("driverLicenseNumber", this.patientMainModel.driverLicenseNumber)
      formData.append("licenseState",this.patientMainModel.licenseState)
      formData.append("clpCdl", this.patientMainModel.clpCdl)
      formData.append("usdotFmcsa", this.patientMainModel.usdotFmcsa)
      formData.append("driverPhone", this.patientMainModel.driverPhone)
      formData.append('state', this.patientMainModel.state)
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

    if(this.patientMainModel.reasonForVisit == "Immigration"){
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
    // else{
    //   formData.append("idCardPicturePath", this.patientOneModel.idCardPicture.name+'-'+Date.now());
    //   formData.append("idCardPictureName", this.patientOneModel.idCardPicture.name); 
    //   formData.append("file", this.patientOneModel.idCardPicture, this.patientOneModel.idCardPicture.name);
    // }
    if(this.patientMainModel.adult == "No"){
      formData.append("guardianIdPath", this.patientMainModel.guardianIdCardPicture.name+'-'+Date.now());
      formData.append("guardianIdFileName", this.patientMainModel.guardianIdCardPicture.name);
      formData.append("file", this.patientMainModel.guardianIdCardPicture, this.patientMainModel.guardianIdCardPicture.name);
      formData.append("guardianName", this.patientMainModel.guardianName);
      formData.append("guardianRelation", this.patientMainModel.guardianRelation);
    }
    if(this.patientMainModel.reasonForVisit == "Covid"){
      formData.append("covidTesting", this.patientMainModel.covidTesting);
    }
    else if(this.patientMainModel.Other == "Other"){
      formData.append("reasonForVisitOther", this.patientMainModel.reasonForVisitOther);
    }
    formData.append("gender", this.patientMainModel.gender);
    formData.append("ProstateExamDate", this.patientMainModel.ProstateExamDate);
    formData.append("lastMammogram", this.patientMainModel.lastMammogram);
    formData.append("lastmenstrualPeriod", this.patientMainModel.lastmenstrualPeriod);
    formData.append("periodDate", this.patientMainModel.periodDate);
    formData.append("breastFeeding", this.patientMainModel.breastFeeding);
    formData.append("pregnant", this.patientMainModel.pregnant);
    formData.append("pregnantMonths", this.patientMainModel.pregnantMonths);


  }

  addressChange(formData : FormData){
    formData.append("addressChange",this.patientOneModel.addressChange );
    if(this.patientOneModel.addressChange == "Yes"){
      formData.append("address",this.patientOneModel.address);
      formData.append("phoneNumber",this.patientOneModel.phoneNumber);
    }
  }

  otherFields(formData : FormData){
    formData.append("zipCode", this.patientOneModel.zipCode);
    formData.append('ssn', this.patientOneModel.ssn)
    formData.append("covid", this.patientOneModel.covid);
    formData.append("fever", this.patientOneModel.fever);
    formData.append("headche", this.patientOneModel.headche);
    formData.append("vomiting", this.patientOneModel.vomiting);
    formData.append("bodyache", this.patientOneModel.bodyache);
    formData.append("coughCongestion", this.patientOneModel.coughCongestion);
    formData.append("breathShortness", this.patientOneModel.breathShortness);
    formData.append("vaccinations", this.patientOneModel.vaccinations);
    formData.append("covidSymptons", this.patientOneModel.covidSymptons);
    formData.append("signatureImg", this.patientOneModel.signatureImg);
  }








}
