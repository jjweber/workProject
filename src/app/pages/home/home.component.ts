import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ArticleService } from '../../services/article.service';
import { FavoritesService } from '../../services/favorites.service';

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
  selectedArticle: any = {
    author: '',
    title: '',
    description: '',
    url: '',
    urlToImage: '',
    publishedAt: '',
    comment: ''
  };

  pageTitle = 'News Feeds';
  articleStore: any = [];

  constructor(private articleService: ArticleService, private favoritesService: FavoritesService) {
  }

  ngOnInit() {
    this.populateFromLocalStorage();
    this.articleService.getArticles()
      .subscribe((data) => this.articlesList = data.articles);
  }

  populateFromLocalStorage() {
    const currentArticlesFromStore = localStorage.getItem('articles');
    this.articleStore = this.favoritesService.getFavoritesFromStorage();
  }

  sourceChanged(newSource) {
    this.newsSource = newSource;
    return this.newsSource;
  }

  displayChangedSource(newsSource) {
    this.articleService.getArticlesBYNewsSource(this.newsSource)
      .subscribe((data) => this.articlesList = data.articles);
  }

  SelectArticle(article: any) {
    this.selectedArticle = article;
  }

  SaveArticle() {
    if (this.selectedArticle.comment) {
      this.commentText = this.selectedArticle.comment;
    } else {
      this.commentText = 'No comment left!';
    }

    this.articleStore.push(this.selectedArticle);

    console.log('Why am I overwriting the first element in array of articles?');
    console.log('Pushing up saved article of: ', this.selectedArticle);
    // const JsonreadyArticles = JSON.stringify(this.savedArticle);
    // this.newsStorageService.setSavedArticles('article', JsonreadyArticles);
    this.favoritesService.setFavorites(this.articleStore);
    console.log(localStorage);
  }
}
