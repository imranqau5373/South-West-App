import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class PatientService {

  BaseURL = 'http://localhost:3000/users';
  constructor(private http: HttpClient) { }

  getPatientData():Observable<any> { 
      return this.http.get<any>('/users');

  }

  createNewPatientDocument(patientData:any):Observable<any> { 
    return this.http.post<any>(this.BaseURL+'/doc',{data:patientData});

  }
  createExistingPatientDocument(patientData:any):Observable<any> { 
    return this.http.post<any>(this.BaseURL+'/existingDoc',{data:patientData});

  }
}