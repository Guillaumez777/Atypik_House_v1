import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers} from '@angular/http';
import {apiKey} from "../../app/apiurls/serverurls.js";
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { AuthProvider } from '../../providers/auth/auth';
import { CrudProvider } from '../../providers/crud/crud';
// import { PrezavisPage } from '../prezavis/prezavis';

/**
 * Generated class for the AjoutsAvisModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ajouts-avis-modal',
  templateUrl: 'ajouts-avis-modal.html',
})
export class AjoutsAvisModalPage {
  reservations:any;
  user:any;
  id: any;
  myComment = {
    user_id : null
  };
  public token: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: AuthProvider,
    public storage: Storage,
    public http: Http,
    public crudProvider:CrudProvider) {
    this.storage.get("user").then((res)=>{
      this.user = res;
      console.log(this.user)
    })
    this.getReservations();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AjoutsAvisModalPage');
  }

  postComment() {
    console.log(this.myComment)
    this.myComment.user_id = this.user.id;
    this.crudProvider.postAvis(this.myComment).then((result)=>{});
  }

  getReservations(){
    this.storage.get("user").then((res)=>{
    let headers = new Headers();
  
      headers.append('Content-Type', 'application/json');
      headers.append('Accept', 'application/json');
  
      headers.append('Access-Control-Allow-Origin', '*');
      headers.append('Access-Control-Allow-Credentials', 'true');
      this.http.get(apiKey+'user/reservations/'+res.id).map(res => res.json())
        .subscribe(data => {
          this.reservations = data;
          console.log(this.reservations);
      });
    })
  }

}