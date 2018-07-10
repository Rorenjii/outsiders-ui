import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { BACKEND_URL } from "../shared/const";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class CharacterService {

    character$ : BehaviorSubject<any> = new BehaviorSubject(null);
    character : any;
    
    characters$ : BehaviorSubject<any> = new BehaviorSubject(null);
    characters : any;

    error : any;

    constructor(private _http: HttpClient) { }

    setCharacter(character : any) {
        this.character$.next(character);
        this.character = character;
    }

    setCharacters(characters : any) {
        this.characters$.next(characters);
        this.characters = characters;
    }

    getCharacter(id : string): any {
        let url = BACKEND_URL + 'api/character/' + id;
        this._http.get(url).subscribe(x => {
            this.setCharacter(x["characters"][0]);
        });
    }
    
    getAllCharactersForUser(userId : string) {
        let url = BACKEND_URL + 'api/character/user/' + userId;
        this._http.get(url).subscribe(x => {
            if (x !== null) {
                this.setCharacters(x["characters"]);
            }
        });
    }
}