import { Component, OnInit, AfterContentInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BACKEND_URL } from '../shared/const';
import { UserService } from '../cf-user/user.service';

@Component({
  selector: 'cf-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavigationComponent {

  constructor(private _http: HttpClient, private _userService: UserService) {
  }
}
