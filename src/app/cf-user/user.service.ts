import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { BACKEND_URL } from "../shared/const";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class UserService {

    user$ : BehaviorSubject<any> = new BehaviorSubject(null);
    user : any;
    error : any;

    constructor(private _http: HttpClient) { }

    setUser(user : any) {
        this.user$.next(user);
        this.user = user;
    }

    getUser(id : string): any {
        let url = BACKEND_URL + 'api/user/' + id;
        this._http.get(url).subscribe(x => {
            this.setUser(x);
        });
    }

    logIn(credentials: any): void {
        let url = BACKEND_URL + 'api/auth/login';
        this._http.post(url, credentials).subscribe(x => {
            let summary = <string> x["summary"];
            if (summary === "Password did not match!" || summary === "User not found by that Email" ) {
                this.error = "username or password not correct";
            } else {
                this.getUser(summary);
            }
        }, y => {
            console.log(y);
        })
    }

    logOut(): void {
        this.setUser(null);
    }

    register(req) {
        let url = BACKEND_URL + 'api/register/'
        this._http.post(url, req).subscribe(x => {
            
        },
        y => {
            this.error = y;
        },
        () => {
            this.error = "Success!";
        });
    }
}