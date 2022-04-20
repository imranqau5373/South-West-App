import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { SignaturePad } from 'angular2-signaturepad';
import { PatientService } from 'src/app/shared/service/patient-service';
import { PatientToastService } from 'src/app/shared/service/patient-toaster-service';

@Component({
  selector: 'app-add-patient-three',
  templateUrl: './add-patient-three.component.html',
  styleUrls: ['./add-patient-three.component.css']
})
export class AddPatientThreeComponent implements OnInit {
  @Input()
  patientThreeModel : any = {};
  signatureImg = "";
  isSignature = false;
  @ViewChild(SignaturePad)
  signaturePad!: SignaturePad;

  signaturePadOptions: Object = { 
    'minWidth': 2,
    'canvasWidth': 700,
    'canvasHeight': 300
  };
  @Output()
  submitThird = new EventEmitter<any>();
  constructor(private patientService : PatientService,
    private toastService : PatientToastService) { }

  ngOnInit(): void {
    this.patientThreeModel.isAgree = true;
  }
  

  submitThree(){
    if (this.isSignature == false)  {
      this.toastService.showError('Signature is required')
    }
    else { 
      this.savePad();
      this.patientThreeModel.signatureImg = this.signatureImg;
    this.submitThird.emit(this.patientThreeModel);
  } 
  }

  drawComplete() {
    console.log(this.signaturePad.toDataURL());
    this.isSignature = true;
  }

  drawStart() {
    console.log('begin drawing');
  }

  clearSignature() {
    this.signaturePad.clear();
    this.isSignature = false
  }

  ngAfterViewInit() {
    this.signaturePad.set('minWidth', 2);
    this.signaturePad.clear();  
  }

  savePad() {   
const base64Data = this.signaturePad.toDataURL();
this.signatureImg = base64Data
  }
}

