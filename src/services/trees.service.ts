import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';


@Injectable()
export class TreesService {
  address = 'https://api-pwd.housecode.pl';

  constructor(private http: Http) {}

  getTrees() {
    const headers = new Headers({'X-AUTH-TOKEN': localStorage.getItem('token')});
    const options = new RequestOptions({ headers: headers });
    this.http.get('https://api-pwd.housecode.pl/proposals', options).subscribe(response => console.log(response.json()));
  }

  getMockTress() {
    return {

    }
  }

/*  signIn(body: { username: string, password: string }) {
    return this.http.post(`${this.address}/tokens`, body);
  }

  getMy() {
    const headers = new Headers({'X-AUTH-TOKEN': localStorage.getItem('token')});
    const options = new RequestOptions({ headers: headers });
    return this.http.get(`${this.address}/accounts/my`, options);
  }*/
}
