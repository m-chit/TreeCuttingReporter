import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { AdminComponent } from './admin/admin.component';
import { ProfileComponent } from './profile/profile.component';
import {AppRoutingModule} from './app-routing.module';

import {AuthService} from '../services/auth.service';
import {UserService} from '../services/user.service';
import { NavbarComponent } from './navbar/navbar.component';
import { TreesComponent } from './trees/trees.component';
import {TreesService} from '../services/trees.service';
import { EditUserComponent } from './edit-user/edit-user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    AdminComponent,
    ProfileComponent,
    NavbarComponent,
    TreesComponent,
    EditUserComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [AuthService, UserService, TreesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
