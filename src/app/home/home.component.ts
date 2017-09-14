import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ArticleService } from '../services/article.service';

class ArticleDO {
constructor(
    public title: string) { }
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  articles: any;
  newsSource: any = '';
  articlesList = new Array;
  pageTitle = 'News Feeds';

  constructor(private articleService: ArticleService) {
  }

  ngOnInit() {
    const searchField = document.querySelector('#userSelections');
    console.log('Making api call');
    this.articleService.getArticles()
      .subscribe((data) => {
        this.articlesList = new Array;
        console.log('Data: ', data);
        // this.articles = data;
        this.articlesList.push(data.articles);
        console.log(this.articlesList);
      });
  }

  sourceChanged(newSource) {
    console.log('New Source chosen: ', newSource);
    this.newsSource = newSource;
    this.articlesList.length = 0;

    this.articleService.getArticlesBYNewsSource(newSource)
      .subscribe((data) => {
        console.log('Data: ', data);
        // this.articles = data;
        this.articlesList.push(data.articles);
        console.log(this.articlesList);
      });
  }
}
