import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @ViewChild('f') form: NgForm;

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit() {
  const body = {
      'username': this.form.value.username,
      'password': this.form.value.password
  };
    this.authService.signIn(body).subscribe(
      response => {
        const token = response.json().token;
        localStorage.setItem('token', token);
        this.router.navigate(['/']);
      }
    );
  }

}
