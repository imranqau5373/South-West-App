import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class PatientService {

  BaseURL = 'http://209.126.105.94:3000/patient';
  constructor(private http: HttpClient) { }

  getPatientData():Observable<any> { 
      return this.http.get<any>('/patient');

  }

  getConsentFile(filePath:any):Observable<any> { 
    return this.http.post<any>(this.BaseURL+'/downloadConsentFile',filePath);
  }

  getPatientFile(filePath:any):Observable<any> { 
    return this.http.get<any>(this.BaseURL+'/downloadPatientData');
  }

  createNewPatientDocument(patientData:any):Observable<any> { 
    return this.http.post<any>(this.BaseURL+'/addNewPatient',patientData);
  }
  getAllNewPatientDocuments():Observable<any> { 
    return this.http.get<any>(this.BaseURL+'/getAllNewPatients');
  }
  getAllExistingPatientDocuments():Observable<any> { 
    return this.http.get<any>(this.BaseURL+'/getAllExistingPatients');
  }
  createExistingPatientDocument(patientData:any):Observable<any> { 
    return this.http.post<any>(this.BaseURL+'/addExistingPatient',patientData);

  }
}