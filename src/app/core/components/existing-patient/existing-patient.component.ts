import { ThisReceiver } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { SignaturePad } from 'angular2-signaturepad';
import { dateTimeValue } from 'docx';
import { PatientService } from 'src/app/shared/service/patient-service';

@Component({
  selector: 'app-existing-patient',
  templateUrl: './existing-patient.component.html',
  styleUrls: ['./existing-patient.component.css']
})
export class ExistingPatientComponent implements OnInit {
  insuranceFrontPicture : File | undefined;
  insuranceBackPicture : File | undefined;
  @Input()
  patientOneModel : any = {};
  @Output()
  submitExisting = new EventEmitter<any>();
  finishPage = false;

  @ViewChild(SignaturePad)
  signaturePad!: SignaturePad;


  parentSignatureImg = "";
  @ViewChild(SignaturePad)
  parentSignaturePad!: SignaturePad;

  signaturePadOptions: Object = { 
    'minWidth': 2,
    'canvasWidth': 700,
    'canvasHeight': 300
  };
  constructor(private patientService : PatientService) { 
    this.patientOneModel.signatureImg = "";
  }

  ngOnInit(): void {
    this.patientOneModel.addressChange = "No";
    this.patientOneModel.covid = "No";
    this.patientOneModel.coughCongestion = "No";
    this.patientOneModel.breathShortness = "No";
    this.patientOneModel.fever = "No";
    this.patientOneModel.vaccinations = "No";
    this.patientOneModel.covidSymptons = "No";
    this.patientOneModel.headche = "No";
    this.patientOneModel.vomiting = "No";
    this.patientOneModel.bodyache = "No";
  }
  ngAfterViewInit() {
    this.signaturePad.set('minWidth', 2);
    this.signaturePad.clear();  
  }

  onChangeInsFrontPic($event : any) {
    this.patientOneModel.insuranceFront = $event.target.files[0];
  }

  
  onChangeIdCardPic($event : any) {
    this.patientOneModel.idCardPicture = $event.target.files[0];
  }

  onChangeInsBacktPic($event : any) {
    this.patientOneModel.insuranceBack = $event.target.files[0];
  }


  
  submit($patient:any){
    this.savePad()
    this.submitExisting.emit(this.patientOneModel);
    //if(this.patientOneModel.idCardPicture && this.patientOneModel.idCardPicture.name && this.patientOneModel.idCardPicture.name.length > 0){
      // const formData = new FormData();
      // this.addressChange(formData);
      // this.otherFields(formData);
      // this.setInsuranceData(formData);
      // this.finishPage = true;
      // this.patientService.createExistingPatientDocument(formData)
      // .subscribe(result => console.log(result));
    //}
    // else{
    //   alert('Must attached the ID Card Picture')
    // }


  }

  setInsuranceData(formData : FormData){
    formData.append("idCardPicturePath", this.patientOneModel.idCardPicture.name+'-'+Date.now());
    formData.append("idCardPictureName", this.patientOneModel.idCardPicture.name);
    if(this.patientOneModel.insurance == "Yes"){
      formData.append("insuranceBackPath", this.patientOneModel.insuranceBack.name+'-'+Date.now());
      formData.append("insuranceFrontFileName", this.patientOneModel.insuranceFront.name);
      formData.append("insuranceBackFileName", this.patientOneModel.insuranceBack.name);
      formData.append("insuranceForntPath", this.patientOneModel.insuranceFront.name+'-'+Date.now());
      formData.append("file", this.patientOneModel.insuranceFront, this.patientOneModel.insuranceFront.name);
      formData.append("file", this.patientOneModel.insuranceBack, this.patientOneModel.insuranceBack.name);  
    }
    formData.append("file", this.patientOneModel.idCardPicture, this.patientOneModel.idCardPicture.name);

  }

  addressChange(formData : FormData){
    formData.append("addressChange",this.patientOneModel.addressChange );
    if(this.patientOneModel.addressChange == "Yes"){
      formData.append("address",this.patientOneModel.address);
      formData.append("phoneNumber",this.patientOneModel.phoneNumber);
    }
  }

  otherFields(formData : FormData){
    formData.append("firstName", this.patientOneModel.firstName);
    formData.append("lastName", this.patientOneModel.lastName);
    formData.append("dateOfBirth", this.patientOneModel.dateOfBirth);
    formData.append("reasonForVisit", this.patientOneModel.reasonForVisit);
    formData.append("zipCode", this.patientOneModel.zipCode);
    formData.append("covid", this.patientOneModel.covid);
    formData.append("fever", this.patientOneModel.fever);
    formData.append("coughCongestion", this.patientOneModel.coughCongestion);
    formData.append("breathShortness", this.patientOneModel.breathShortness);
    formData.append("vaccinations", this.patientOneModel.vaccinations);
    formData.append("insurance", this.patientOneModel.insurance);
    formData.append("covidSymptons", this.patientOneModel.covidSymptons);
    formData.append("covidTesting", this.patientOneModel.covidTesting);
    formData.append("adult", this.patientOneModel.adult);
    formData.append("witnessName", this.patientOneModel.witnessName);
    formData.append("guardianName", this.patientOneModel.guardianName);
    formData.append("signatureImg", this.patientOneModel.signatureImg);

  }

  drawComplete() {
    console.log(this.signaturePad.toDataURL());
  }


  drawStart() {
    console.log('begin drawing');
  }

  clearSignature() {
    this.signaturePad.clear();
  }

  clearParentSignature() {
    this.parentSignaturePad.clear();
  }

  savePad() {
    const base64Data = this.signaturePad.toDataURL('image/png', 0.5);
    this.patientOneModel.signatureImg = base64Data;
  }

  saveParentPad() {
    const base64Data = this.signaturePad.toDataURL('image/png', 0.5);
   // const base64Data = this.signaturePad.toDataURL();
  }

}
