import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {UserModel} from '../app/models/user.model';


@Injectable()
export class UserService {
  address = 'https://api-pwd.housecode.pl';

  constructor(private http: Http) {}

  getAllUsers() {
    const headers = new Headers({'X-AUTH-TOKEN': localStorage.getItem('token')});
    const options = new RequestOptions({ headers: headers });
    return this.http.get(`${this.address}/accounts`, options);
  }

  getUser(id: number) {
    const headers = new Headers({'X-AUTH-TOKEN': localStorage.getItem('token')});
    const options = new RequestOptions({ headers: headers });
    return this.http.get(`${this.address}/accounts/` + id, options);
  }

  editUser(body: UserModel, id: number) {
    const headers = new Headers({'X-AUTH-TOKEN': localStorage.getItem('token')});
    const options = new RequestOptions({ headers: headers });
    return this.http.put(`${this.address}/accounts/` + id, body, options);
  }
}
