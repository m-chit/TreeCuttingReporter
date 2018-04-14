import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {UserModel} from '../models/user.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  me: UserModel;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.getMy().subscribe(
      response => {
        const resp = response.json();
       this.me = new UserModel(resp);
       console.log("DD", this.me)
      }
    );
  }


}
