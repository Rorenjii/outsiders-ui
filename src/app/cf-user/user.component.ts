import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';

@Component({
  selector: 'cf-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  title = 'Crystal Fantasy';
  user = null;
  summary = null;
  
  constructor(private _userService: UserService) {
  }

  ngOnInit() {
    this._userService.user$.subscribe(x => {
      if (x !== null) {
        this.user = x;
        this.summary = this.user.name + " is currently logged in."
      } else {
        this.summary = "Not logged in...";
      }
    })
  }
}
