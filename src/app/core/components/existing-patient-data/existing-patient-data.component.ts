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
    debugger;
    this.mainPage = false;
    this.patientOneModel.insurance = this.patientMainModel.insurance;
    this.existingPage = true;
    
  }

  existingPageSubmitted($event:any){
    debugger;
    const formData = new FormData();
    this.existingPage = false;
    this.finishPage = true;

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
    formData.append("lastName", this.patientMainModel.lastName);
    formData.append("dateOfBirth", this.patientMainModel.dateOfBirth);
    formData.append("reasonForVisit", this.patientMainModel.reasonForVisit);
    if(this.patientMainModel.insurance == "Yes"){
      formData.append("insuranceBackPath", this.patientMainModel.insuranceBack.name+'-'+Date.now());
      formData.append("insuranceFrontFileName", this.patientMainModel.insuranceFront.name);
      formData.append("insuranceBackFileName", this.patientMainModel.insuranceBack.name);
      formData.append("insuranceForntPath", this.patientMainModel.insuranceFront.name+'-'+Date.now());
      formData.append("file", this.patientMainModel.insuranceFront, this.patientMainModel.insuranceFront.name);
      formData.append("file", this.patientMainModel.insuranceBack, this.patientMainModel.insuranceBack.name);
      formData.append("idCardPicturePath", this.patientMainModel.idCardPicture.name+'-'+Date.now());
      formData.append("idCardPictureName", this.patientMainModel.idCardPicture.name); 
      formData.append("file", this.patientMainModel.idCardPicture, this.patientMainModel.idCardPicture.name); 
    }
    if(this.patientMainModel.adult == "Yes"){
      formData.append("guardianIdPath", this.patientMainModel.guardianIdCardPicture.name+'-'+Date.now());
      formData.append("guardianIdFileName", this.patientMainModel.guardianIdCardPicture.name);
      formData.append("file", this.patientMainModel.guardianIdCardPicture.name);
    }
    if(this.patientMainModel.reasonForVisit == "Covid"){
      formData.append("covidTesting", this.patientMainModel.covidTesting);
    }
    else if(this.patientMainModel.Other == "Other"){
      formData.append("reasonForVisitOther", this.patientMainModel.reasonForVisitOther);
    }

  }

  addressChange(formData : FormData){
    formData.append("addressChange",this.patientOneModel.addressChange );
    if(this.patientOneModel.addressChange == "Yes"){
      formData.append("address",this.patientOneModel.address);
      formData.append("phoneNumber",this.patientOneModel.phoneNumber);
    }
  }

  otherFields(formData : FormData){
    debugger;
    formData.append("zipCode", this.patientOneModel.zipCode);
    formData.append("covid", this.patientOneModel.covid);
    formData.append("fever", this.patientOneModel.fever);
    formData.append("coughCongestion", this.patientOneModel.coughCongestion);
    formData.append("breathShortness", this.patientOneModel.breathShortness);
    formData.append("vaccinations", this.patientOneModel.vaccinations);
    formData.append("covidSymptons", this.patientOneModel.covidSymptons);
    formData.append("covidTesting", this.patientOneModel.covidTesting);
    formData.append("signatureImg", this.patientOneModel.signatureImg);

  }








}
