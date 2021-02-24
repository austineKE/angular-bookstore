import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login.service';
import {Users} from '../../common/users';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;


  constructor(private login_service: LoginService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.login_service.login(this.username, this.password);

    //   .subscribe(
    //   data => {
    //     console.log('username ' + this.username);
    //     console.log('password' + this.password);
    //     this.router.navigate(['/reg/users']).then(r => {console.log(r)});
    //   }, error => {
    //     alert('Unable to login');
    //   }
    // );
  }


}
