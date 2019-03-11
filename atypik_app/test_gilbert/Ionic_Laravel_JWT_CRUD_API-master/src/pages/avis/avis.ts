import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import {apiKey} from "../../app/apiurls/serverurls.js";
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { AuthProvider } from '../../providers/auth/auth';
import { LoginPage } from '../login/login';

/**
 * Generated class for the AvisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-avis',
  templateUrl: 'avis.html',
})
export class AvisPage {

  data = [];
  comments: any;
  user:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public authService: AuthProvider,
    public storage: Storage,
    public http: Http) {
    this.data = navParams.get('data');
    this.comments = navParams.get('comments');
    this.user = this.storage.get('user');

    
    console.log("et oui les gars");
    console.log(this.user);
    
    this.getComments();
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AvisPage');
  }

  getComments(){
  this.storage.get("user").then((res)=>{
  let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Credentials', 'true');
  this.http.get(apiKey+'user/comments/'+res.id).map(res => res.json())
    .subscribe(data => {
        this.comments = data;
        console.log("gaga");
        console.log(res.prenom);
    });
  })
 }

  myLogout(){
    this.authService.logout();
    this.navCtrl.setRoot(LoginPage);
  }

}
