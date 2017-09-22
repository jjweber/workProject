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

  // Declaring variables.
  pageTitle = 'News Feeds';
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
  articleStore: any = [];

  constructor(private articleService: ArticleService, private favoritesService: FavoritesService) {
  }

  ngOnInit() {
    // Calling populateFromLocalStorage function on init to make sure localStorage is not overwriten.
    this.populateFromLocalStorage();

    // Calling getArticles from articleService which makes a call to the news api to populate the view with ABC news articles on init.
    this.articleService.getArticles()
      // Subscribing to the function to get access to its data.
      .subscribe((data) => this.articlesList = data.articles);
  }

  // Function will make sure program knows what items have been saved to localStorage so it adds to them instead of overwriting items.
  populateFromLocalStorage() {
    // Created variable to hold the articles already saved in localStorage.
    const currentArticlesFromStore = localStorage.getItem('articles');
    // Calling getFavoritesFromStorage function from favoritesService and storing it in my articleStore variable.
    this.articleStore = this.favoritesService.getFavoritesFromStorage();
  }

  // Function to handle the changing of the news source that is selected from the dropdown on the News Feed page.
  sourceChanged(newSource) {
    this.newsSource = newSource;
    return this.newsSource;
  }

  // Function that is passed the changed news source and passes it to the article service to display articles from the selected source.
  displayChangedSource(newsSource) {
    // Calling getArticlesBYNewsSource function on articleService and passing it the changed news source.
    this.articleService.getArticlesBYNewsSource(this.newsSource)
      // Subscribing to the function tot get access to its data.
      .subscribe((data) => this.articlesList = data.articles);
  }

  // Function that is passed the data from the article that is clicked to populate the modal with correct article data.
  SelectArticle(article: any) {
    // Setting the passed article to the selectedArticle variable.
    this.selectedArticle = article;
  }

  // Function that handles saving the article to localStorage.
  SaveArticle() {
    // If user leaves a comment about article it is passed to the articles, else it is passed a default comment.
    if (this.selectedArticle.comment) {
      this.commentText = this.selectedArticle.comment;
    } else {
      this.selectedArticle.comment = 'No comment left!';
    }

    // Pushing the selectedArticle to my articleStore array.
    this.articleStore.push(this.selectedArticle);
    console.log('Pushing up saved article of: ', this.selectedArticle);

    // Calling setFavorites from favoritesService and passing it my articleStore array.
    this.favoritesService.setFavorites(this.articleStore);
    // console.log(localStorage);
  }
}
