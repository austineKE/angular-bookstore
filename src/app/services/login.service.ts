import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public username: string;
  public password: string;
  USER_NAME_SESSION_ATTRIBUTE = 'authenticatedUser';


  constructor(private http: HttpClient) { }

  public login(username: string, password: string){
    // const headers = new HttpHeaders({Authorization: 'Basic' + btoa(username + ':' + password)});
    return this.http.get('http://localhost:8080/user',
      {headers: {authorization: this.createBasicAuthToken(username, password) }}).pipe(map((res) => {
       this.username = username;
       this.password = password;
       this.registerSuccessfulLogin(username, password);
    })).subscribe(data => {
      alert('successfully logged in');
    }, error => {alert('error occurred');});
  }

  private createBasicAuthToken(username: string, password: string) {
    return 'Basic' + window.btoa(username + ':' + password);
  }

  private registerSuccessfulLogin(username: string, password: string) {
    sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE, username);

  }

}
