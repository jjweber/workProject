import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../../services/favorites.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  pageTitle = 'My Favorites';
  articlesFromStorage: any = [];
  indexOfArticleToDelete: any;
  clickedArticle: any = {};

  constructor(private favoritesService: FavoritesService) {}

  ngOnInit() {
    this.articlesFromStorage = this.favoritesService.getFavoritesFromStorage();
    console.log('Articles From Storage', this.articlesFromStorage);
  }

  ClickedArticle(article: any, index) {
    console.log('Article clicked: ', article);
    this.clickedArticle = article;

    console.log('Removing article at index of: ', index);
    this.indexOfArticleToDelete = index;
  }

  DeleteArticle() {
    console.log('Fix deactivated...');

    this.favoritesService.removeFavorite(this.indexOfArticleToDelete);
    this.articlesFromStorage = this.favoritesService.getFavoritesFromStorage();
  }
}
