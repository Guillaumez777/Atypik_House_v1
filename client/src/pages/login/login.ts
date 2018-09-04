import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, LoadingController, Loading } from 'ionic-angular';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';
//import { ServerProvider } from '../../providers/server/server';
import 'rxjs/add/operator/map';
//import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
//import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  constructor(public navCtrl: NavController, public http: Http) {
    this.getUsers();
  }

  // loading: Loading;
   registerCredentials = { email: '', password: '' };

  getUsers(){
    this.http.get('http://127.0.0.1:8000/api/users')
    .map(res => res.json())
    .subscribe(users => {
      this.users = users;
      console.log(users);
    }, err => {
      console.log("err");
    });

  }
  


  // public login() {
  //   this.showLoading()
  //   this.auth.login(this.registerCredentials).subscribe(allowed => {
  //     if (allowed) {
  //       this.nav.setRoot(HomePage);
  //     } else {
  //       this.showError("These credentials do not match our records.");
  //     }
  //   },
  //     error => {
  //       this.showError(error);
  //     });
  // }

  // showLoading() {
  //   this.loading = this.loadingCtrl.create({
  //     content: 'Please wait...',
  //     dismissOnPageChange: true
  //   });
  //   this.loading.present();
  // }

  // showError(text) {
  //   this.loading.dismiss();

  //   let alert = this.alertCtrl.create({
  //     title: 'Fail',
  //     subTitle: text,
  //     buttons: ['OK']
  //   });
  //   alert.present(prompt);
  // }


}