import {RouterModule, Routes} from '@angular/router';
import {NgModule, OnInit} from '@angular/core';

import {LoginComponent} from './login/login.component';
import {MainComponent} from './main/main.component';
import {AdminComponent} from './admin/admin.component';
import {ProfileComponent} from './profile/profile.component';
import {TreesComponent} from './trees/trees.component';



const appRoutes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: '', component: MainComponent, children: [
    {path: 'admin', component: AdminComponent},
    {path: 'profile', component: ProfileComponent},
    {path: '', component: TreesComponent},
  ]
  },
  /*{path: 'not-found', component: NotFoundComponent},*/
  {path: '**', redirectTo: 'login'}
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
