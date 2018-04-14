import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../services/user.service';
import {UserModel} from '../models/user.model';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  @ViewChild('f') form: NgForm;
  id: number;
  user: UserModel;

  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.userService.getUser(this.id).subscribe(response => this.user = new UserModel(response.json()));
    });
  }

  onSubmit() {
    this.userService.editUser(this.user, this.id).subscribe(
      response => {
        console.log(response.json())
      }
    );
  }


}
