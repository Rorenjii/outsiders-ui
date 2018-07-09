import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'


import { AppComponent } from './app.component';
import { UserComponent } from './cf-user/user.component';
import { ArenaComponent } from './cf-arena/arena.component';
import { NavigationComponent } from './cf-nav/nav.component';
import { AppRoutingModule } from './/app-routing.module';
import { TeamComponent } from './cf-team/team.component';
import { HomeComponent } from './cf-home/home.component';
import { ChatComponent } from './cf-chat/chat.component';
import { LoginComponent } from './cf-login/login.component';
import { UserService } from './cf-user/user.service';
import { TeamService } from './cf-team/team.service';

const routes = [
  { path: '', component: HomeComponent },
  { path: 'arena', component: ArenaComponent },
  { path: 'team', component: TeamComponent },
  { path: 'user', component: UserComponent },
  { path: 'login', component: LoginComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ArenaComponent,
    NavigationComponent,
    TeamComponent,
    HomeComponent,
    ChatComponent,
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
    TeamService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
