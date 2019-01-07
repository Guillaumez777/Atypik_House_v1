// Tuto utilisé : https://www.youtube.com/watch?v=hQ-QjZezhLc

// Core components
import { Injectable }   from '@angular/core';
import { Http }         from '@angular/http';

// RxJS
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { AtypikhouseApiGlobal } from './../models/atypikhouseapi-global.model';

@Injectable()
export class AtypikhouseApiService {

    constructor(private http: Http) {}
    
    public getHome(): Promise<any> {
    
        const url = 'http://127.0.0.1:8000/api/houses%27';

        return this.http.get(url)
        .toPromise()
        .then(response => response.json() as AtypikhouseApiGlobal)
        .catch(error => console.log('Une erreur est survenue : ' + error))

    }

    public getGilou() {

        // Code de Gilbert

        // const url = 'http://127.0.0.1:8000/api/houses%27';
        
        // return this.http.get(url)
        // .map(res => res.json())
        // .subscribe(
        // data => { this.data = data; },
        // err => { console.log('error') }
        // )

    }



}