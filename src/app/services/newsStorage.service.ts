import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, Jsonp, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';

@Injectable()
export class NewsStorageService {

  constructor(private jsonp: Jsonp, private http: Http) {}

  getSavedArticles() {
    const list = new Array<any>();

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      list.push(value);
    }
    return list;
  }

  setSavedArticles(key: string, item: string) {
    console.log('Saving article: ', item);
    localStorage.setItem(key, item);
  }

  removeSavedArticles(key: string) {
    console.log('Removing article: ', key);
    localStorage.removeItem(key);
  }
}
