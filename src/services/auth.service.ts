import {Injectable} from '@angular/core';
import {Http, RequestOptions} from '@angular/http';


@Injectable()
export class AuthService {
  address = 'https://api-pwd.housecode.pl';

  constructor(private http: Http) {}

  signIn(body: { username: string, password: string }) {
    return this.http.post(`${this.address}/tokens`, body);
  }

 /* getMy() {
    const headers = new Headers({'X-AUTH-TOKEN':'eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MjM3ODA2MjEsInVzZXJuYW1lIjoiYWRtaW4ifQ.jWSN1Vjr6k_BRFJzECVSFZDCOQAwT36g4G12lDp_iYs'})
    let options = new RequestOptions({ headers: headers });
    return this.http.get(`${this.address}/accounts/me'`, options).subscribe(response => console.log(response.json()));
  }*/
}
