import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/shared/service/patient-service';

@Component({
  selector: 'app-get-all-existingpatients',
  templateUrl: './get-all-existingpatients.component.html',
  styleUrls: ['./get-all-existingpatients.component.css']
})
export class GetAllExistingpatientsComponent implements OnInit {

  constructor(private patientService : PatientService) { }

  ngOnInit(): void {
    this.getAllExistingPatients();

  }

  getAllExistingPatients(){
    this.patientService.getAllExistingPatientDocuments()
    .subscribe(result => console.log(result));
  }
}
