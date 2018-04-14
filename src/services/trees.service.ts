import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';


@Injectable()
export class TreesService {
  address = 'https://api-pwd.housecode.pl';

  constructor(private http: Http) {}

  getTrees() {
    const headers = new Headers({'X-AUTH-TOKEN': localStorage.getItem('token')});
    const options = new RequestOptions({ headers: headers });
    return this.http.get(`${this.address}/proposals`, options);
  }

  getMockTrees() {
    return [
      {
        name: 'Tree1',
        id: 0
      },
      {
        name: 'Tree2',
        id: 1
      }
    ];
  }
}
