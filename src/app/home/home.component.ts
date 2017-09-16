import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ArticleService } from '../services/article.service';

const selectArticle = {name: 'test'};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  articles: any;
  newsSource: any = '';
  articlesList: any = [];
  selectedArticle: any = {};
  savedArticle: any = {};
  pageTitle = 'News Feeds';
  articleStore: any = [];

  constructor(private articleService: ArticleService) {
  }

  ngOnInit() {
    const searchField = document.querySelector('#userSelections');
    console.log('Making api call');
    this.articleService.getArticles()
      .subscribe((data) => {
        this.articlesList = new Array;
        console.log('Data: ', data);

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
  SelectArticle(article: any) {
    this.selectedArticle = article;
  }

  SaveArticle(selectedArticle: any) {
    this.savedArticle = selectedArticle;
    console.log(this.savedArticle);
    this.articleStore.push(this.savedArticle);
    let index: any = 0;
    for (let i = 0; i < this.articleStore.length; i++) {
      index++;
    }
    console.log(index);
    const JsonreadyArticles = JSON.stringify(this.savedArticle);
    localStorage.setItem('article' + index, JsonreadyArticles);
    console.log(localStorage.length);
  }
}
