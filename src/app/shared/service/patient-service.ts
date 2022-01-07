import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class PatientService {

  BaseURL = 'http://localhost:3000/patient';
  constructor(private http: HttpClient) { }

  getPatientData():Observable<any> { 
      return this.http.get<any>('/patient');

  }

  createNewPatientDocument(patientData:any):Observable<any> { 
    return this.http.post<any>(this.BaseURL+'/addNewPatient',{data:patientData});
  }
  getAllNewPatientDocuments():Observable<any> { 
    return this.http.get<any>(this.BaseURL+'/getAllNewPatients');
  }
  getAllExistingPatientDocuments():Observable<any> { 
    return this.http.get<any>(this.BaseURL+'/getAllExistingPatients');
  }
  createExistingPatientDocument(patientData:any):Observable<any> { 
    return this.http.post<any>(this.BaseURL+'/addExistingPatient',{data:patientData});

  }
}