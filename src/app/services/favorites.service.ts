import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';

@Injectable()
export class FavoritesService {

  constructor() {}

  getFavoritesFromStorage() {
    let favs = JSON.parse(localStorage.getItem('articles'));
    if (!favs) {
      favs = [];
    }
    return favs;
  }

  setFavorites(favorites) {
    console.log('Setting favs to: ', favorites);
    localStorage.setItem('articles', JSON.stringify(favorites));
  }

  removeFavorite(indexToRemove) {
    console.log('In service... Removing article from storage at index of: ', indexToRemove);

    const currentFavs = this.getFavoritesFromStorage();
    currentFavs.splice(indexToRemove, 1);

    console.log('Current favs after splicing: ', currentFavs);

    this.setFavorites(currentFavs);
  }
}
