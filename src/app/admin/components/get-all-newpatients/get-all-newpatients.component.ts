import { Component, OnDestroy, OnInit } from '@angular/core';
import { PatientService } from 'src/app/shared/service/patient-service';


@Component({
  selector: 'app-get-all-newpatients',
  templateUrl: './get-all-newpatients.component.html',
  styleUrls: ['./get-all-newpatients.component.css']
})
export class GetAllNewpatientsComponent implements OnInit {
  patients: any;
  title = 'datatables';
  dtOptions: DataTables.Settings = {};
  constructor(private patientService : PatientService) {
   }



  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true
    };
    this.getAllNewPatients();
  }

  getAllNewPatients(){
    this.patientService.getAllNewPatientDocuments()
    .subscribe(result => {
      this.patients = result;
    });
  }

}
