import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogClose, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddMediciationComponent } from 'src/app/shared/dialogs/add-mediciation/add-mediciation.component';
import { PatientOne } from 'src/app/shared/models/patient-one';

@Component({
  selector: 'app-add-patient-one',
  templateUrl: './add-patient-one.component.html',
  styleUrls: ['./add-patient-one.component.css']
})
export class AddPatientOneComponent implements OnInit {
  @Input()
  patientOneModel : any = {};
  @Output()
  submitFirst = new EventEmitter<any>();
  showValue : boolean = true;
  medicineList = Array();
  constructor(    private router: Router,private modalService: NgbModal,
    private matDialog: MatDialog) { }

  ngOnInit(): void {
    this.patientOneModel.gender = "Male";
    this.patientOneModel.surgery = "No";
    this.patientOneModel.alergic = "No";
    this.patientOneModel.medicalProblem = "No";
    this.patientOneModel.smoke = "No";
    this.patientOneModel.tobacco = "No";
    this.patientOneModel.alcohol = "No";
    this.patientOneModel.drugs = "No";
    this.patientOneModel.yearlyPhysical = "No";
    this.patientOneModel.covid = "No";
    this.patientOneModel.coughCongestion = "No";
    this.patientOneModel.breathShortness = "No";
    this.patientOneModel.fever = "No";
    this.patientOneModel.covidSymptons = "No";
    this.patientOneModel.headche = "No";
    this.patientOneModel.vomiting = "No";
    this.patientOneModel.bodyache = "No";
  }

  nextClick(){
    this.router.navigate(['/add-patient-two']);
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

  submitOne(pageOne : any){
    console.log(this.patientOneModel.maritalStatus);
    this.patientOneModel = pageOne.value;
    this.submitFirst.emit(this.patientOneModel);
  }

  open() {
    const modalRef = this.modalService.open(AddMediciationComponent, { size: 'small', backdrop: 'static' });
    modalRef.result.then((result: any) => {
      console.log(result);
    }, (reason) => {
      console.log(reason);
      const medicineData = {name : reason.data.name,
        id : this.medicineList.length + 1,
        potency :reason.data.potency,
        usage: reason.data.usage,
      };
      this.medicineList.push(medicineData);
      this.patientOneModel.medicationList = this.medicineList;
    });
  }



  deleteMed(id:string){
    this.medicineList = this.medicineList.filter(x => x.id != id);
  }

}
