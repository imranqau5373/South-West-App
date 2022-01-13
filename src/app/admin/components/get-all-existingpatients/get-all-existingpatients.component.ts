import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { debug } from 'console';
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
      for (let i = 0; i < result.length; i++) {
        result[i].filePath = "http://209.126.105.94:3000/"+result[i].filePath.replace('./public/','') ;
        if(result[i].adult == "Yes"){
          result[i].consentPath = "http://209.126.105.94:3000/"+result[i].consentPath.replace('./public/','') ;
        }
        else{
          result[i].consentPath = null;
        }
      }
      this.patients = result;
    });
  }

  downloadFile(filePath:any){
    window.open( 
      filePath, "_blank");
  }

  downloadConsent(filePath : any){
    if(filePath == null){
      alert('Patient Age is great than 18.');
    }
    else{
      window.open( 
        filePath, "_blank");
    }
  }
}
