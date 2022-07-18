import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
 BaseURL = environment.apiUrl+'/users';
  constructor(private _http: HttpClient) {}
    
  submitRegister(body:any){
    return this._http.post(this.BaseURL+'/register', body,{
      observe:'body'
    });
  }

  login(body:any){
    return this._http.post(this.BaseURL+'/login', body,{
      observe:'body'
    });
  }

   getUserName() {
    return this._http.get(this.BaseURL+'/username', {
      observe: 'body',
      params: new HttpParams().append('token', localStorage.getItem('token') || '{}')
    });
  }
 
   
}
