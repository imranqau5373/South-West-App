import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AddMediciationComponent } from 'src/app/shared/dialogs/add-mediciation/add-mediciation.component';
import { PatientService } from 'src/app/shared/service/patient-service';
import { environment } from 'src/environments/environment';
import { MyserviceService } from 'src/app/shared/service/myservice.service';
import { Router } from '@angular/router';
import * as _ from 'lodash';
import { result } from 'lodash';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-get-all-newpatients',
  templateUrl: './get-all-newpatients.component.html',
  styleUrls: ['./get-all-newpatients.component.css'],
  providers: [DatePipe],
})
export class GetAllNewpatientsComponent implements OnInit {
  patients: any;
  title = 'datatables';
  dataSource : any;
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;
  columndefs : any[] = ['firstName','lastName','email','dateOfBirth','gender','insurance', 'createdDate', 'downloadFiles'];
  dtOptions: DataTables.Settings = {};
  constructor(private patientService : PatientService,
    private matDialog: MatDialog ,private myService:MyserviceService,
  private _router: Router, public datepipe: DatePipe ) {
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
        // Consent 
        if(result[i].consentPath && result[i].consentPath != null){
          result[i].consentPath = environment.apiUrl+result[i].consentPath.replace('./public/','/') ;
        }
        else{
          result[i].consentPath = null;
        }
        //insurance
        if(result[i].insuranceFilePath && result[i].insuranceFilePath != null){
          result[i].insuranceFilePath = environment.apiUrl+result[i].insuranceFilePath.replace('./public/','/') ;
         // result[i].cashSuperBillFilePath = null;
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
        //
         if(result[i].imigrationFilePath && result[i].imigrationFilePath != null){
          result[i].imigrationFilePath = environment.apiUrl+result[i].imigrationFilePath.replace('./public/','/') ;
        }
        else{
          result[i].imigrationFilePath = null;
        }
        //
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
      /*  */
      /*   if(result[i].adult == "No"){
          result[i].consentPath = environment.apiUrl+result[i].consentPath.replace('./public/','/') ;
        }
        else{
          result[i].consentPath = null;
        } */
      }
      this.patients = result;
      this.dataSource = new MatTableDataSource(result);
      this.dataSource.paginator = this.paginator;
      /* Filter by DOB */
      this.dataSource.filterPredicate = (result:any, filter: string) =>
      !filter || result.dateOfBirth.includes(filter);

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

 /*  */
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

  /*  */
  filterDOB(filterValue: any, event:any) {
    debugger;

    if (event.value != undefined) {
      filterValue = this.datepipe.transform(filterValue, 'MM/dd/yyyy');
      console.log(filterValue);
    }
    this.dataSource.filter = filterValue.trim();
  }

  downloadConsent(consentPath : any){
    if(consentPath == null){
      alert('Patient Age is great than 18.');
      return;
    }
    else{
      window.open( 
        consentPath, "_blank");
    }
  }

  open(){
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.data = {
    };


    this.matDialog.open(AddMediciationComponent,dialogConfig);
  }

logout(){
    localStorage.removeItem('token');
    this._router.navigate(['login']);
  }

}
