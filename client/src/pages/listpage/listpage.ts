import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { ServerProvider } from '../../providers/server/server';
import { DatasourceProvider } from '../../providers/datasource/datasource';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[ServerProvider]
})
export class HomePage {

	public items: any;
  public toggle: boolean = false;
  public pastname: string;

  constructor(
   public navCtrl: NavController,
   public db: ServerProvider,
   public navparam: NavParams,
   public datasource: DatasourceProvider) {
      this.db.getData().subscribe(data =>{
          this.datasource.source = data.json();  
      });
  }
}