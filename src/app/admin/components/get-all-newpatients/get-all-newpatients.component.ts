import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PatientService } from 'src/app/shared/service/patient-service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-get-all-newpatients',
  templateUrl: './get-all-newpatients.component.html',
  styleUrls: ['./get-all-newpatients.component.css']
})
export class GetAllNewpatientsComponent implements OnInit {
  patients: any;
  title = 'datatables';
  dataSource : any;
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;
  columndefs : any[] = ['firstName','lastName','email','dateOfBirth','insurance','downloadFiles'];
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

  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getAllNewPatients(){
    this.patientService.getAllNewPatientDocuments()
    .subscribe(result => {
      debugger;
      for (let i = 0; i < result.length; i++) {
        if(result[i].filePath && result[i].filePath != null){
          result[i].filePath = environment.apiUrl+result[i].filePath.replace('./public/','/') ;
        }
        else{
          result[i].filePath = null;
        }
        if(result[i].insuranceFilePath && result[i].insuranceFilePath != null){
          result[i].insuranceFilePath = environment.apiUrl+result[i].insuranceFilePath.replace('./public/','/') ;
          result[i].cashSuperBillFilePath = null;
        }
        if(result[i].cashSuperBillFilePath && result[i].cashSuperBillFilePath != null){
          result[i].insuranceFilePath = null;
          result[i].cashSuperBillFilePath = environment.apiUrl+result[i].cashSuperBillFilePath.replace('./public/','/') ;
        }
        if(result[i].doctorFormPath && result[i].doctorFormPath != null){
          result[i].doctorFormPath = environment.apiUrl+result[i].doctorFormPath.replace('./public/','/') ;
        }
        else{
          result[i].doctorFormPath = null;
        }
        
        if(result[i].adult == "No"){
          result[i].consentPath = environment.apiUrl+result[i].consentPath.replace('./public/','/') ;
        }
        else{
          result[i].consentPath = null;
        }
      }
      this.patients = result;
      this.dataSource = new MatTableDataSource(this.patients);
      this.dataSource.paginator = this.paginator;
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

  searchPatient(search:any){
    debugger;
    this.dataSource.filter = search.toLowerCase().trim();
  }
  
  downloadConsent(filePath : any){
    if(filePath == null){
      alert('Patient Age is great than 18.');
      return;
    }
    else{
      window.open( 
        filePath, "_blank");
    }
  }


}
