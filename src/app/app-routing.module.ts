import {RouterModule, Routes} from '@angular/router';
import {NgModule, OnInit} from '@angular/core';

import {LoginComponent} from './login/login.component';
import {MainComponent} from './main/main.component';



const appRoutes: Routes = [
  {
    path: '', component: LoginComponent
  },
  {
    path: 'main', component: MainComponent
  },
  /*{path: 'not-found', component: NotFoundComponent},*/
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}
