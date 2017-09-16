import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  allArticles: any = localStorage;
  savedArticles: any = [];
  realData: any = '';

  constructor() { }

  ngOnInit() {
    if (localStorage.length > 0) {
      // We have items
      console.log(localStorage.length);
    } else {
      // No items
      console.log('We have none');
    }
    for (let i = 0; i < localStorage.length; i++) {
      console.log(localStorage.key(i) + [localStorage.getItem(localStorage.key(i))]);
      this.realData = JSON.parse(localStorage.getItem(localStorage.key(i)));
      this.savedArticles.push(this.realData);
    }
    console.log(this.realData.title);
    console.log(this.savedArticles[0].title);
  }

}
