import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'


import { AppComponent } from './app.component';
import { UserComponent } from './cf-user/user.component';
import { CharacterComponent } from './cf-character/character.component';
import { NavigationComponent } from './cf-nav/nav.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './cf-home/home.component';
import { LoginComponent } from './cf-login/login.component';
import { UserService } from './cf-user/user.service';
import { CharacterService } from './cf-character/character.service';

const routes = [
  { path: '', component: HomeComponent },
  { path: 'character', component: CharacterComponent },
  { path: 'user', component: UserComponent },
  { path: 'login', component: LoginComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    CharacterComponent,
    NavigationComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    UserService,
    CharacterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
