import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { BACKEND_URL } from "../shared/const";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class UserService {

    user$ : BehaviorSubject<any> = new BehaviorSubject(null);
    user : any;

    constructor(private _http: HttpClient) { }

    setUser(user : any) {
        this.user$.next(user);
        this.user = user;
    }

    logIn(credentials: any): void {
        let url = BACKEND_URL + 'api/login';
        this._http.post(url, credentials).subscribe(x => {
            let id = <number> x;
            if (id > -1) {
                this.getUser(id);
            }
        })
    }

    logOut(): void {
        let url = BACKEND_URL + 'api/logout';
        let request = {
            'id': this.user.id
        }
        this._http.post(url, request).subscribe(x => {
            if (x) {
                this.setUser(null);
            }
        })
    }

    getUser(id : number): any {
        let url = BACKEND_URL + 'api/user/' + id;
        this._http.get(url).subscribe(x => {
            this.setUser(x);
        });
    }
}