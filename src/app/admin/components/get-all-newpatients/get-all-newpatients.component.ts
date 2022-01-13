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
      for (let i = 0; i < result.length; i++) {
        if(result[i].filePath && result[i].filePath != null){
          result[i].filePath = "http://localhost:3000/"+result[i].filePath.replace('./public/','') ;
        }
        else{
          result[i].filePath = null;
        }
        
        if(result[i].adult == "Yes"){
          result[i].consentPath = "http://localhost:3000/"+result[i].consentPath.replace('./public/','') ;
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
