import { Component, OnInit } from '@angular/core';
import {UserModel} from '../models/user.model';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  me: UserModel;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.getMy().subscribe(
      response => {
        const resp = response.json();
        this.me = new UserModel(resp);
        console.log("DdD", resp, this.me)
      }
    );
  }
}
