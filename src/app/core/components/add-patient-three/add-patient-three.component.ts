import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { SignaturePad } from 'angular2-signaturepad';

@Component({
  selector: 'app-add-patient-three',
  templateUrl: './add-patient-three.component.html',
  styleUrls: ['./add-patient-three.component.css']
})
export class AddPatientThreeComponent implements OnInit {
  @Input()
  patientThreeModel : any = {};
  signatureImg = "";
  @ViewChild(SignaturePad)
  signaturePad!: SignaturePad;

  signaturePadOptions: Object = { 
    'minWidth': 2,
    'canvasWidth': 700,
    'canvasHeight': 300
  };
  @Output()
  submitThird = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {

  }

  submitThree(){
    this.patientThreeModel.signatureImg = this.signatureImg;
    this.submitThird.emit(this.patientThreeModel);
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

  ngAfterViewInit() {
    this.signaturePad.set('minWidth', 2);
    this.signaturePad.clear();  
  }

  savePad() {
    const base64Data = this.signaturePad.toDataURL();
    this.signatureImg = base64Data;
  }



}
