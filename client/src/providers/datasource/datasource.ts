import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


/*
  Generated class for the DatasourceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatasourceProvider {

  // constructor(public http: HttpClient) {
  //   console.log('Hello DatasourceProvider Provider');
  // }
  public source:any[] = [];
  public tempdata:any = '';

}
