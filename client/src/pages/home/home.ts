import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { DatasourceProvider } from '../../providers/datasource/datasource';

import 'rxjs/add/operator/map';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public http: Http, public datasource: DatasourceProvider) {
    // let header = new Headers();
    // header.append('Accept', 'application/json');

    // this.http.get('http://127.0.0.1:8000/api/houses')
    // .map(res => res.json())
    // .subscribe(
    //   data => { 
    //     this.data = data;
    //   },
    //   err => {
    //     console.log('error')
    //   }
    // )
  }
  getData(){

    return this.http.get('http://127.0.0.1:8000/api/houses')
    .map(res => res);

  }

}
