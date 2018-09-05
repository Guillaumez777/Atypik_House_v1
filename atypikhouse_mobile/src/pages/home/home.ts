import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // url: string;
  // data: string;
  data = [];

  constructor(public navCtrl: NavController, public http: Http) {
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
}