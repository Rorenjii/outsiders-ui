import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BACKEND_URL } from '../shared/const';
import { UserService } from '../cf-user/user.service';
import { takeUntil } from "rxjs/operators"
import { CharacterService } from '../cf-character/character.service';


@Component({
  selector: 'cf-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email : string = '';
  password : string = '';

  userName : string;

  loggedIn = false;

  constructor(private _http: HttpClient, private _userService: UserService, private _characterService: CharacterService) {
  }

  ngOnInit() {
    this._userService.user$.subscribe(x => {
      if (x !== null) {
        this.loggedIn = true;
        this.userName = x.name || x.email;
        console.log(x);
        this._characterService.getAllCharactersForUser(x.id);
      } else {
        this.loggedIn = false;
        this.userName = undefined;
        this._characterService.setCharacter(null);
        this._characterService.setCharacters(null);
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

  signUp() {
    let req = {
      'email': this.email,
      'password': this.password
    }
    this._userService.register(req);
    this.email = '';
    this.password = '';
  }
}
