import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import { AuthProvider } from '../../providers/auth/auth';
import { LoginPage } from '../login/login';


/**
 * Generated class for the HebergementsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hebergements',
  templateUrl: 'hebergements.html',
})
export class HebergementsPage {
  data = [];
  result: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http,public authService: AuthProvider) {
    this.result = navParams.get('data');
    console.log(this.result);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HebergementsPage');
    console.log(this.result)
    let token = this.result;
    console.log(token);
    // this.http.get('http://127.0.0.1:8000/api/mylocations/'+token['id']+'')
    // // this.http.get('http://127.0.0.1:8000/api/houses')
    // .map(res => res.json())
    // .subscribe(data => {
    //   this.data = data;
    //   console.log(data);
    // }, err => {
    //   console.log("err");
    // });

  }

  myLogout(){
    this.authService.logout();
    this.navCtrl.setRoot(LoginPage);
  }
  

}
