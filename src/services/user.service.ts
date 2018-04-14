import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';


@Injectable()
export class UserService {
  address = 'https://api-pwd.housecode.pl';

  constructor(private http: Http) {}

  getAllUsers() {
    console.log("dupa")
    const headers = new Headers({'X-AUTH-TOKEN': localStorage.getItem('token')});
    const options = new RequestOptions({ headers: headers });
    return this.http.get(`${this.address}/accounts`, options);
  }

  putUser() {
    const user = {
      email: 'oo@oo',
    isAdmin: false,
    lastName: 'oo',
    name: 'oo',
    token: 'oo',
    username: 'oo',
    role: 'USER',
      password: 'oo'
    };
    const headers = new Headers({'X-AUTH-TOKEN': localStorage.getItem('token')});
    const options = new RequestOptions({ headers: headers });
    return this.http.put(`${this.address}/accounts`, user, options);
  }
/*
  signIn(body: { username: string, password: string }) {
    return this.http.post(`${this.address}/tokens`, body);
  }

  getMy() {
    const headers = new Headers({'X-AUTH-TOKEN': localStorage.getItem('token')});
    const options = new RequestOptions({ headers: headers });
    return this.http.get(`${this.address}/accounts/my`, options);
  }*/
}