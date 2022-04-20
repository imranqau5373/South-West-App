import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable()
export class PatientService {

  BaseURL = environment.apiUrl+'/patient';
  constructor(private http: HttpClient) { }

  getPatientData():Observable<any> { 
      return this.http.get<any>('/patient');

  }

  getCheckEmail (email:string):Observable<any> {
    return this.http.get<any>(this.BaseURL+'/checkEmail/'+email);
  }

  getCheckMRNNumber(mrnNmber:String):Observable<any> { 
    return this.http.get<any>(this.BaseURL+'/checkMRNNumber/'+mrnNmber);

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