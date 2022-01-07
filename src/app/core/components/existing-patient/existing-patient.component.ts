import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/shared/service/patient-service';

@Component({
  selector: 'app-existing-patient',
  templateUrl: './existing-patient.component.html',
  styleUrls: ['./existing-patient.component.css']
})
export class ExistingPatientComponent implements OnInit {
  patientOneModel : any = {};
  finishPage = false;
  constructor(private patientService : PatientService) { }

  ngOnInit(): void {
    this.patientOneModel.addressChange = "No";
    this.patientOneModel.covid = "No";
    this.patientOneModel.coughCongestion = "No";
    this.patientOneModel.breathShortness = "No";
    this.patientOneModel.fever = "No";
    this.patientOneModel.vaccinations = "No";
    this.patientOneModel.insurance = "No";
    this.patientOneModel.adult = "No";
  }

  
  submit($patient:any){
    this.patientOneModel = $patient.value;
    this.finishPage = true;
    this.patientService.createExistingPatientDocument(this.patientOneModel)
    .subscribe(result => console.log(result));

  }

}
