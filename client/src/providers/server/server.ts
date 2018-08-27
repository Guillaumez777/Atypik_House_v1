import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DatasourceProvider } from '../datasource/datasource';
import 'rxjs/add/operator/map';

/*
  Generated class for the ServerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServerProvider {

  constructor(public http: HttpClient, public datasource: DatasourceProvider) {
    console.log('Hello ServerProvider Provider');
  }

  getData(){

    return this.http.get('http://127.0.0.1:8000/api/houses')
    .map(res => res);

  }
}
