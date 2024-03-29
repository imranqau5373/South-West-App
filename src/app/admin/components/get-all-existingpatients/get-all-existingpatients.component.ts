import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild} from '@angular/core';
import { debug } from 'console';
import { PatientService } from 'src/app/shared/service/patient-service';
import { environment } from 'src/environments/environment';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DatePipe } from '@angular/common';
import {FormControl, FormGroup} from '@angular/forms';
import * as _ from 'lodash';
@Component({
  selector: 'app-get-all-existingpatients',
  templateUrl: './get-all-existingpatients.component.html',
  styleUrls: ['./get-all-existingpatients.component.css'],
  providers: [DatePipe]
})
export class GetAllExistingpatientsComponent implements OnInit {
  patients: any;
  title = 'datatables';
  dataSource: any;

/* Date Range */
pipe! : DatePipe
filterForm :any = new FormGroup({
  fromDate : new FormControl(),
  toDate : new FormControl(),
});
get fromDate() {
  return this.filterForm.get('fromDate').value;
}
get toDate() {
  return this.filterForm.get('toDate').value;
}  
/*  */

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;
  columndefs : any[] = ['firstName','lastName','email','dateOfBirth','gender','insurance','createdDate', 'downloadFiles'];
  dtOptions: DataTables.Settings = {};
  constructor(private patientService : PatientService,public datepipe: DatePipe) { }

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
        if(result[i].imigrationFilePath && result[i].imigrationFilePath != null){
          result[i].imigrationFilePath = environment.apiUrl+result[i].imigrationFilePath.replace('./public/','/') ;
        }
        else{
          result[i].imigrationFilePath = null;
        }
        /* Medical Examination */
       if(result[i].medicalExaminationFilePath && result[i].medicalExaminationFilePath != null){
        result[i].medicalExaminationFilePath = environment.apiUrl+result[i].medicalExaminationFilePath.replace('./public/','/') ;
      }
      else{
        result[i].medicalExaminationFilePath = null;
      }
    /* Medical Certificate */
    if(result[i].medicalCertificateFilePath && result[i].medicalCertificateFilePath != null){
        result[i].medicalCertificateFilePath = environment.apiUrl+result[i].medicalCertificateFilePath.replace('./public/','/') ;
      }
      else{
        result[i].medicalCertificateFilePath = null;
      }
    /* Covid */
     if(result[i].covidFilePath && result[i].covidFilePath != null){
        result[i].covidFilePath = environment.apiUrl+result[i].covidFilePath.replace('./public/','/') ;
      }
      else{
        result[i].covidFilePath = null;
      }
        /*  Sport*/
       if(result[i].schoolFilePath && result[i].schoolFilePath != null){
        result[i].schoolFilePath = environment.apiUrl+result[i].schoolFilePath.replace('./public/','/') ;
      }
      else{
        result[i].schoolFilePath = null;
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
  /* Filter by Insurance */
 onChange($event:any) {
  if($event.value.toLowerCase() == "all") {
    this.dataSource = new MatTableDataSource(this.patients)
  }
  else {
    let filteredData = _.filter(this.patients, (item)=> {
      return item.insurance.toLowerCase() == $event.value.toLowerCase()
    })
    this.dataSource = new MatTableDataSource(filteredData)
  }
 }
 /* Filter Gender */
 onChangeGender($event:any) {
  if($event.value.toLowerCase() == "all") {
    this.dataSource = new MatTableDataSource(this.patients)
  }
  else {
    let filteredData = _.filter(this.patients, (item)=> {
      return item.gender.toLowerCase() == $event.value.toLowerCase()
      
    })
    this.dataSource = new MatTableDataSource(filteredData)
  }
 
 
  }
  /* DOB Filter */
  filterDOB(filterValue: any, event:any) {
    if (event.value != undefined) {
     this.dataSource.filterPredicate = (result:any, filter: any) => 
     !filter || result.dateOfBirth.includes(filter); 
       filterValue = this.datepipe.transform(filterValue, 'MM/dd/yyyy');
     }
     this.dataSource.filter = filterValue.trim();
   } 
  // Date range
  applyFilter() {
    this.pipe = new DatePipe('en');
    this.dataSource.filterPredicate = (result:any, filter:any) => {
      if (this.fromDate && this.toDate) {
        return new Date (result.createdDate) >= this.fromDate && new Date(result.createdDate)  <= this.toDate;
      }
      return true;
    };  
    this.dataSource.filter = '' + Math.random();
}  

  logout () {

  }

}
