import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    const searchField = document.querySelector('#userSelections');
    const apikey = '0d7756c1218343da88921149462e1cb7';
    console.log(apikey);

  }
}
