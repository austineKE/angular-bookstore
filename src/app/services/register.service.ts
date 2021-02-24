import { Injectable } from '@angular/core';
import {Users} from '../common/users';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) {
  }

  public registerUserFromRestApi(user: Users){
return this.http.post('http://localhost:8080/api/reg/users', user);
  }
}
