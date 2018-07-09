import { Component, OnInit, AfterContentInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BACKEND_URL } from '../shared/const';
import { UserService } from '../cf-user/user.service';

@Component({
  selector: 'cf-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavigationComponent implements AfterContentInit {

  loggedIn = false;
  user;
  summary;

  constructor(private _http: HttpClient, private _userService: UserService) {
  }

  ngAfterContentInit() {
    this._userService.user$.subscribe(x => {
      if (x) {
      this.user = x;
      this.loggedIn = true;
      this.summary = this.user.displayName + ' is logged in!';
      } else {
        this.loggedIn = false;
        this.user = null;
        this.summary = '';
      }
    })
  }
}
