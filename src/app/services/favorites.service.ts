import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';

@Injectable()
export class FavoritesService {

  constructor() {}

  // Function to get items from localStorage.
  getFavoritesFromStorage() {
    // Parsing the article data from localStorage and storing it to the favs variable.
    let favs = JSON.parse(localStorage.getItem('articles'));

    // If there are no articles in localStorage then set favs variable to an empty array.
    if (!favs) {
      favs = [];
    }

    // Returning the favs.
    return favs;
  }

  // Function that is passed the favorites to store them in localStorage.
  setFavorites(favorites) {
    // Stringifying the favorites and storing them in localStorage.
    localStorage.setItem('articles', JSON.stringify(favorites));
    console.log('Setting favs to: ', favorites);
  }

  // Function that is passed the selected item to remove from localStorage.
  removeFavorite(indexToRemove) {
    console.log('In service... Removing article from storage at index of: ', indexToRemove);

    // Variable to hold localStorage items.
    const currentFavs = this.getFavoritesFromStorage();
    // Splicing the passed indexToRemove from currentFavs.
    currentFavs.splice(indexToRemove, 1);

    // Updating localStorage to the articles stored in currentFavs.
    this.setFavorites(currentFavs);
    console.log('Current favs after splicing: ', currentFavs);
  }
}
