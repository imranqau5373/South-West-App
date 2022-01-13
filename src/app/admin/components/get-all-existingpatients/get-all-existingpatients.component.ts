import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/shared/service/patient-service';

@Component({
  selector: 'app-get-all-existingpatients',
  templateUrl: './get-all-existingpatients.component.html',
  styleUrls: ['./get-all-existingpatients.component.css']
})
export class GetAllExistingpatientsComponent implements OnInit {
  patients: any;
  title = 'datatables';
  dtOptions: DataTables.Settings = {};
  constructor(private patientService : PatientService) { }

  ngOnInit(): void {
    //this.getAllExistingPatients();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
  
    this.getAllExistingPatients();

  }

  getAllExistingPatients(){
    this.patientService.getAllExistingPatientDocuments()
    .subscribe(result => {
      this.patients = result;
    });
  }
}
