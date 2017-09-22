import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, Jsonp, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';

const apiKey = '0d7756c1218343da88921149462e1cb7';
const baseUrl = 'https://newsapi.org/v1/articles';

const searchField = {
  value: 'bild'
};

@Injectable()
export class ArticleService {
  articlesUrl: any = '';
  currentSource: any = 'abc-news-au';

  constructor(private jsonp: Jsonp, private http: Http) {}

  getArticles() {
    this.articlesUrl = baseUrl + '?sortBy=top&source=' +
     this.currentSource + '&apiKey=' + apiKey;
    console.log('Calling api: ', this.articlesUrl);

    return this.http.get(this.articlesUrl)
      .map((res: any) => res.json());
  }

  getArticlesBYNewsSource(newsSource: string) {
    this.articlesUrl = baseUrl + '?sortBy=top&source=' +
     newsSource + '&apiKey=' + apiKey;
    console.log('Calling api: ', this.articlesUrl);

    return this.http.get(this.articlesUrl)
      .map((res: any) => res.json());
  }
}
