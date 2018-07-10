import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CharacterComponent } from './character.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    CharacterComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [CharacterComponent]
})
export class CharacterModule { }
