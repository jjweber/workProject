import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../../services/favorites.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  // Declaring variables.
  pageTitle = 'My Favorites';
  articlesFromStorage: any = [];
  indexOfArticleViewed: any;
  clickedArticle: any = {};

  constructor(private favoritesService: FavoritesService) {}

  ngOnInit() {

    // Calling the getFavoritesFromStorage from favoritesService and storing it in my articlesFromStorage variable.
    this.articlesFromStorage = this.favoritesService.getFavoritesFromStorage();
  }

  // Function that is called from the article that is clicked on and passes it that articles data and index.
  ClickedArticle(article: any, index) {
    // Storing the passed article to the clickedArticle variable.
    this.clickedArticle = article;
    console.log('Article clicked: ', article);

    // Storing the passed index to the indexOfArticleViewed variable.
    this.indexOfArticleViewed = index;
    console.log('Viewing article at index of: ', index);
  }

  // Fuction that removes an article from localStorage.
  DeleteArticle() {
    // Calling the removeFavorite function from favoritesService and passing it the article to remove from localStorage.
    this.favoritesService.removeFavorite(this.indexOfArticleViewed);

    // Getting the changed localStorage to reset and remove the deleted article from the screen.
    this.articlesFromStorage = this.favoritesService.getFavoritesFromStorage();
  }
}
