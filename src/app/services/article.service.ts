import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, Jsonp, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';

@Injectable()
export class ArticleService {

  // Declaring variables.
  apiKey = '0d7756c1218343da88921149462e1cb7';
  baseUrl = 'https://newsapi.org/v1/articles';
  articlesUrl: any = '';
  currentSource: any = 'abc-news-au';

  constructor(private jsonp: Jsonp, private http: Http) {}

  // Function makes initial call to news api to populate page with articles when page loads.
  getArticles() {
    // Building some variables to make api call.
    this.articlesUrl = this.baseUrl + '?sortBy=top&source=' +
     this.currentSource + '&apiKey=' + this.apiKey;
    console.log('Calling api: ', this.articlesUrl);

    // Making call to api for articles from ABC news.
    return this.http.get(this.articlesUrl)
      // Mapping the results to json.
      .map((res: any) => res.json());
  }

  // Function that is passed a newsSource to make an additional call to news api to populate page when news source has changed.
  getArticlesBYNewsSource(newsSource: string) {
    // Building some variables to make api call.
    this.articlesUrl = this.baseUrl + '?sortBy=top&source=' +
     newsSource + '&apiKey=' + this.apiKey;
    console.log('Calling api: ', this.articlesUrl);

    // Making call to api for articles from selected source.
    return this.http.get(this.articlesUrl)
    // Mapping the results to json.
      .map((res: any) => res.json());
  }
}
