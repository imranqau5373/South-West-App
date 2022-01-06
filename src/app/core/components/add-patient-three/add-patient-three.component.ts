import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-patient-three',
  templateUrl: './add-patient-three.component.html',
  styleUrls: ['./add-patient-three.component.css']
})
export class AddPatientThreeComponent implements OnInit {
  @Input()
  patientThreeModel : any = {};

  @Output()
  submitThird = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {

  }

  submitThree(){
    this.submitThird.emit(this.patientThreeModel);
  }



}
