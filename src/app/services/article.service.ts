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

  constructor(private jsonp: Jsonp, private http: Http) {}

  getArticles() {
    const articlesUrl = `${baseUrl}?sortBy=top&source=abc-news-au&apiKey=${apiKey}`;
    console.log('Calling api: ', articlesUrl);

    return this.http.get(articlesUrl)
      .map((res: any) => res.json());
  }

  getArticlesBYNewsSource(newsSource: string) {
    const articlesUrl = `${baseUrl}?sortBy=top&source=${newsSource}&apiKey=${apiKey}`;
    console.log('Calling api: ', articlesUrl);

    return this.http.get(articlesUrl)
      .map((res: any) => res.json());
  }
}
