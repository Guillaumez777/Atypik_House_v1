import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { ServerProvider } from '../../providers/server/server';
import 'rxjs/add/operator/map';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // url: string;
  // data: string;
  data = [];

  constructor(public navCtrl: NavController, public http: Http/*, public serverService: ServerProvider*/) {
    this.getData();
  }
  getData(){
    this.http.get('http://127.0.0.1:8000/api/houses')
    .map(res => res.json())
    .subscribe(data => {
      this.data = data;
      console.log(data);
    }, err => {
      console.log("err");
    });

  }

  // ionViewDidLoad(){
  //   this.serverService.getData();
  // }

  // users;

  // constructor(private nav: NavController/*, private auth: AuthServiceProvider*/, public http:Http) {
  //   this.getUsers();
  // }

  //public getUsers() {
    // let headers = new Headers(
    // {
    //   'Authorization' : this.auth.getToken()
    // });

    //let options = new RequestOptions({ headers: headers });
    // Change to this http://ed43bb3b.ngrok.io/api/users
  //   let url = 'http://127.0.0.1:8000/api/users';
  //   this.http.get(url/*, options*/).map(res => res.json()).subscribe(
  //     data => {
  //       this.users = data.data;
  //     }
  //   );
  // }

  // public logout() {
  //   this.auth.logout().subscribe(succ => {
  //     this.nav.setRoot('LoginPage')
  //   });
  // }

}
