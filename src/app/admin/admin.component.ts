import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {UserModel} from '../models/user.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  users: UserModel[];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getAllUsers().subscribe(
      response => {
        const resp = response.json();
        this.users = resp.content;
        console.log("users", this.users)
      }
    );

    this.userService.putUser().subscribe(
      response => {
        const resp = response.json();
        console.log("put user", resp);
      }
    );

  }
}
