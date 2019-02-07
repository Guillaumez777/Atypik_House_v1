import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.result = navParams.get('token');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HebergementsPage');
    // this.http.get('http://127.0.0.1:8000/api/user?token='+this.result+'');
    // this.http.get('http://127.0.0.1:8000/api/mylocations/'+this.result['id']+'')
    this.http.get('http://127.0.0.1:8000/api/houses')
    .map(res => res.json())
    .subscribe(data => {
      this.data = data;
      console.log(data);
    }, err => {
      console.log("err");
    });

  }
  

}
