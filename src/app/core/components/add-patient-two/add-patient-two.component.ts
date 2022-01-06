import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-patient-two',
  templateUrl: './add-patient-two.component.html',
  styleUrls: ['./add-patient-two.component.css']
})
export class AddPatientTwoComponent implements OnInit {
  @Input()
  patientTwoModel : any = {};
  @Output()
  submitSecond = new EventEmitter<any>();
  constructor(    private router: Router ) { }

  ngOnInit(): void {
  }

  nextClick(){
    this.router.navigate(['/add-patient-three']);
  }

  submitTwo(){
    this.submitSecond.emit(this.patientTwoModel);
  }

}
