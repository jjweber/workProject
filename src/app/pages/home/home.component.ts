import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ArticleService } from '../../services/article.service';
// import { NewsStorageService } from '../services/newsStorage.service';

// const selectArticle = {name: 'test'};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  articles: any;
  commentText: any;
  newsSource: any = 'abc-news-au';
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
        console.log('Default News Api Data:', this.articlesList);
      });
  }

  sourceChanged(newSource) {
    console.log('New Source chosen: ', newSource);
    this.newsSource = newSource;
    return this.newsSource;
  }

  displayChangedSource(newsSource) {
    this.articlesList.length = 0;

    this.articleService.getArticlesBYNewsSource(this.newsSource)
      .subscribe((data) => {
        console.log('Data: ', data);

        this.articlesList.push(data.articles);
        console.log('New Api Data: ', this.articlesList);
      });
  }

  SelectArticle(article: any) {
    this.selectedArticle = article;
  }

  SaveArticle(selectedArticle: any) {
    // Want to add a popup to ask for comment and add it to my selectedArticle data
    const inputValue = (<HTMLInputElement>document.getElementById('commentText')).value;
    console.log(inputValue);

    if (inputValue) {
      this.commentText = inputValue;
    } else {
      this.commentText = 'No comment left!';
    }

    (<HTMLInputElement>document.getElementById('commentText')).value = null;

    // Creating savedArticles Object
    this.savedArticle = {
      title: this.selectedArticle.title,
      author: this.selectedArticle.author,
      description: this.selectedArticle.description,
      url: this.selectedArticle.url,
      urlToImage: this.selectedArticle.urlToImage,
      publishedAt: this.selectedArticle.publishedAt,
      comment: this.commentText
    };

    console.log(this.savedArticle);

    this.articleStore.push(this.savedArticle);
    let index: any = 0;
    for (let i = 0; i < this.articleStore.length; i++) {
      index++;
    }

    // const JsonreadyArticles = JSON.stringify(this.savedArticle);
    // this.newsStorageService.setSavedArticles('article', JsonreadyArticles);

    localStorage.setItem('articles' + index, JSON.stringify(this.savedArticle));
    console.log(localStorage);
  }
}
