import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the ServerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServerProvider {

  constructor(public http: Http) {
    console.log('Hello ServerProvider Provider');
  }

  // getData(){
  //   this.http.get('http://127.0.0.1:8000/api/houses')
  //   .map(res => res.json())
  //   .subscribe(data => {
  //     console.log(data);
  //   }, err => {
  //     console.log("err");
  //   });

  //}
}
