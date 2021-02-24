import { Component, OnInit } from '@angular/core';
import {RegisterService} from '../../services/register.service';
import {Users} from '../../common/users';

@Component({
  selector: 'app-resister',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user = new Users();

  constructor(private _service: RegisterService) { }

  ngOnInit() {

  }

  userLogin(){
    this._service.registerUserFromRestApi(this.user).subscribe(
      data =>{
        alert('Successful');
      },
      err => {
        alert('An error occurred');
      }
    );
  }


}
