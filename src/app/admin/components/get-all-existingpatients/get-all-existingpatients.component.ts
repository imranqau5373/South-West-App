import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild} from '@angular/core';
import { debug } from 'console';
import { PatientService } from 'src/app/shared/service/patient-service';
import { environment } from 'src/environments/environment';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-get-all-existingpatients',
  templateUrl: './get-all-existingpatients.component.html',
  styleUrls: ['./get-all-existingpatients.component.css']
})
export class GetAllExistingpatientsComponent implements OnInit {
  patients: any;
  title = 'datatables';
  dataSource: any;



  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;
  columndefs : any[] = ['firstName','lastName','email','dateOfBirth','gender','insurance', 'downloadFiles'];
  dtOptions: DataTables.Settings = {};
  constructor(private patientService : PatientService) { }

  ngOnInit(): void {
    //this.getAllExistingPatients();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true
    };
  
    this.getAllExistingPatients();

  }

  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
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
        if(result[i].insuranceFilePath && result[i].insuranceFilePath != null){
          result[i].insuranceFilePath = environment.apiUrl+result[i].insuranceFilePath.replace('./public/','/') ;
          result[i].cashSuperBillFilePath = null;
        }
        if(result[i].cashSuperBillFilePath && result[i].cashSuperBillFilePath != null){
          result[i].insuranceFilePath = null;
          result[i].cashSuperBillFilePath = environment.apiUrl+result[i].cashSuperBillFilePath.replace('./public/','/') ;
        }
        if(result[i].adult == "No"){
          result[i].consentPath = environment.apiUrl+result[i].consentPath.replace('./public/','/') ;
        }
        else{
          result[i].consentPath = null;
        }
        if(result[i].doctorFormPath && result[i].doctorFormPath != null){
          result[i].doctorFormPath = environment.apiUrl+result[i].doctorFormPath.replace('./public/','/') ;
        }
        else{
          result[i].doctorFormPath = null;
        }
      }
      this.patients = result;
      this.dataSource = new MatTableDataSource(result);
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

  downloadConsent(filePath : any){
    if(filePath == null){
      alert('Patient Age is great than 18.');
    }
    else{
      window.open( 
        filePath, "_blank");
    }
  }
  searchPatient(search:any){
    debugger;
    this.dataSource.filter = search.toLowerCase().trim();
  }
  logout () {

  }

}
