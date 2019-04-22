//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



import {apiKey} from "../../app/apiurls/serverurls.js";
import { Http , Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';


/*
  Generated class for the CrudProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CrudProvider {
  postInfo = [];

  constructor(public storage: Storage ,
    public http: Http) {
    console.log('Hello CrudProvider Provider');
  }

postAvis(postInfo){
  return new Promise((resolve, reject) => {
   this.storage.get('token').then((value) => {
    console.log(value);
     let headers = new Headers();
  
      headers.append('Content-Type', 'application/json');
      headers.append('Accept', 'application/json');
  
      headers.append('Access-Control-Allow-Origin', '*');
      headers.append('Access-Control-Allow-Credentials', 'true');
      headers.append('Access-Control-Allow-Methods', 'GET, POST, PUT,DELETE, OPTIONS');
      console.log('value: ' + value);
      console.log(postInfo);
      this.http.post(apiKey+'user/comment', JSON.stringify(postInfo),  {headers: headers})
        .subscribe(data => {
          // resolve(data);
          
          console.log(data);
        }, (err) => {
          // reject(err);
        }); 
    }) 

 });

}







editPosts(id,postInfo){
  return new Promise((resolve, reject) => {
   this.storage.get('token').then((value) => {

     let headers = new Headers();
     headers.append('Content-Type', 'application/json');
     headers.append('Authorization', 'Bearer '+value);
     console.log('value: ' + value);

     this.http.put(apiKey+'api/books/' +id ,  JSON.stringify(postInfo),  {headers: headers})
       .map(res => res.json())
       .subscribe(data => {
         resolve(data);
       }, (err) => {
         reject(err);
       }); 
   }) 

 });

}






deletePosts(id ){
  return new Promise((resolve, reject) => {
   this.storage.get('token').then((value) => {

     let headers = new Headers();
     headers.append('Content-Type', 'application/json');
     headers.append('Authorization', 'Bearer '+value);
     console.log('value: ' + value);

     this.http.delete(apiKey+'api/books/' +id,    {headers: headers})
       .map(res => res.json())
       .subscribe(data => {
         resolve(data);
       }, (err) => {
         reject(err);
       }); 
   }) 

 });

}









}
