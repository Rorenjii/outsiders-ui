import { Component, Input, OnInit } from '@angular/core';
import { CharacterService } from './character.service';

@Component({
  selector: 'cf-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  title = 'PCM - Character';

  names : Array<string> = [];
  ids : Array<string> = [];

  character : any;
  characters : any;

  summary : any;

  constructor(private _characterService: CharacterService) {
  }

  ngOnInit() {
    this._characterService.characters$.subscribe(x => {
      if (x !== null) {
        if (x.length !== 0) {
          this.characters = x;
          this.summary = "Fetched all characters";
        } else {
          this.summary = "No characters found, try logging in";
        }
      } else {
        this.character = null;
        this.characters = null;
      }
    })
  }

  loadCharacter(id : string) {
    this._characterService.getCharacter(id);
    this._characterService.character$.subscribe(x => {
        if (x !== null) {
          this.character = x;
        }
    });
  }
}
