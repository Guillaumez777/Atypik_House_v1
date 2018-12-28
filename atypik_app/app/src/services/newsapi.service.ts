// Core components
import { Injectable }   from '@angular/core';
import { Http }         from '@angular/http';

// RxJS
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

// Mes Imports
// https://newsapi.org/s/the-next-web-api
import { NewsApiGlobal } from './../models/newsapi-global.model';


@Injectable()
export class NewsApiService {

    private baseUrl: string = 'https://newsapi.org/v2/';
    private source: string = 'the-next-web';
    private apiKey: string = '4f4935f0248746fab103d8b97f16615c';
    
    constructor(private http: Http) {

    }

    public getArticles(): Promise<any> {
        const url = `${this.baseUrl}top-headlines?sources=${this.source}&apiKey=${this.apiKey}`;
        //var url = $this.baseUrl + 'articles?source=' + this.source;
        
        return this.http.get(url)
        .toPromise()
        .then(response => response.json() as NewsApiGlobal)
        .catch(error => console.log('Une erreur est survenue : ' + error))
    }

}