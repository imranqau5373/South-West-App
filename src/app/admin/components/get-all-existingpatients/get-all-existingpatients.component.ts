import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { debug } from 'console';
import { PatientService } from 'src/app/shared/service/patient-service';
import { environment } from 'src/environments/environment';

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
        if(result[i].filePath && result[i].filePath != null){
          result[i].filePath = environment.apiUrl+result[i].filePath.replace('./public/','/') ;
        }
        else{
          result[i].filePath = null;
        }
        if(result[i].imigrationFilePath && result[i].imigrationFilePath != null){
          result[i].imigrationFilePath = environment.apiUrl+result[i].imigrationFilePath.replace('./public/','/') ;
          result[i].cashSuperBillFilePath = null;
        }
        if(result[i].cashSuperBillFilePath && result[i].cashSuperBillFilePath != null){
          result[i].imigrationFilePath = null;
          result[i].cashSuperBillFilePath = environment.apiUrl+result[i].cashSuperBillFilePath.replace('./public/','/') ;
        }
        if(result[i].adult == "No"){
          result[i].consentPath = environment.apiUrl+result[i].consentPath.replace('./public/','/') ;
        }
        else{
          result[i].consentPath = null;
        }
      }
      this.patients = result;
    });
  }

  downloadFile(filePath:any){
    if(filePath == null){
      alert('File Not Exist.');
      return;
    }
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
