import {Component, OnInit} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {
  title = 'app works!';

  constructor(private http: Http) {
  }

  ngOnInit() {
/*    const headers = new Headers({'X-AUTH-TOKEN':'eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MjM3ODA2MjEsInVzZXJuYW1lIjoiYWRtaW4ifQ.jWSN1Vjr6k_BRFJzECVSFZDCOQAwT36g4G12lDp_iYs'})
    let options = new RequestOptions({ headers: headers });
    this.http.get('https://api-pwd.housecode.pl/accounts', options).subscribe(response => console.log(response.json()));
    this.http.get('https://api-pwd.housecode.pl/departments', options).subscribe(response => console.log(response.json()));
    this.http.get('https://api-pwd.housecode.pl/proposals', options).subscribe(response => console.log(response.json()));

    this.http.get('https://api-pwd.housecode.pl/proposals/gis/validate', options).subscribe(response => console.log(response.json()));

  this.http.put('https://api-pwd.housecode.pl/proposals', {
    parcelNumber: 'Gdańsk',
    street: 'Gdańsk',
    name: 'Gdańsk',
    email: 'dd@dd',
    trees: 0,
    locationDesc: 'Gdańsk',
    longitude: 18.713528,
    lastName: 'Gdańsk',
    precinct: 'Gdańsk',
    latitude:  54.362583}, options).subscribe(response => console.log(response.json()));
//this.http.post('https://api-pwd.housecode.pl/tokens', {username: 'admin', password: 'Madmin123'}).subscribe(response => console.log(response.json()));*/
  }
}
