import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BACKEND_URL } from '../shared/const';
import { UserService } from '../cf-user/user.service';
import { takeUntil } from "rxjs/operators"


@Component({
  selector: 'cf-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email : string = '';
  password : string = '';

  loggedIn = false;

  constructor(private _http: HttpClient, private _userService: UserService) {
  }

  ngOnInit() {
    this._userService.user$.subscribe(x => {
      if (x !== null) {
        this.loggedIn = true;
      } else {
        this.loggedIn = false;
      }
    })
  }

  logIn() {
    let credentials = {
      'email': this.email,
      'password': this.password
    }
    this._userService.logIn(credentials);
  }

  logOut() {
    this._userService.logOut();
    this.email = '';
    this.password = '';
    //clear input fields
  }
}
