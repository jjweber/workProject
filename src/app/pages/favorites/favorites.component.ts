import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../../services/favorites.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  articlesFromStorage: any = [];
  indexOfArticleToDelete: any;

  articleKeyId: any = [];
  savedArticles: any = [];
  dataKey: any = '';
  realData: any = '';
  clickedArticle: any = {};
  removeArticle: any = {};


  constructor(private favoritesService: FavoritesService) {}

  ngOnInit() {
    this.articlesFromStorage = this.favoritesService.getFavoritesFromStorage();
    console.log('Articles From Storage', this.articlesFromStorage);
    /*
    if (localStorage.length > 0) {
      // We have items
      for (let i = 0; i < localStorage.length; i++) {
        this.dataKey = localStorage.key(i);
        this.articleKeyId.push(localStorage.key(i));
        this.realData = JSON.parse(localStorage.getItem(localStorage.key(i)));
        this.savedArticles.push(this.realData);
      }
      console.log(this.realData.title);
      console.log(this.savedArticles);
    } else {
      // No items
      const holder = document.getElementById('articlesContainer');
      const emptyMessage = document.createElement('h3');
      emptyMessage.innerHTML = 'Your favorites are empty!<br>';
      emptyMessage.innerHTML += 'Choose the articles you like from the News Feeds page to add them to your favorites here.';
      emptyMessage.setAttribute('class', 'noFavorites');
      emptyMessage.setAttribute('style', 'color: indianred');
      holder.appendChild(emptyMessage);


      console.log('We have none');
    }
    */
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
    /*
    this.removeArticle = clickedArticle;
    if (confirm('Are you sure you want to delete this article from your favorites?') === true) {
      console.log(this.removeArticle);
      localStorage.removeItem(this.removeArticle.key);
    }
    */

    this.articlesFromStorage = this.favoritesService.getFavoritesFromStorage();
  }
}
