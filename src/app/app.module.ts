import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { AboutComponent } from './pages/about/about.component';

import { ArticleService } from './services/article.service';
import { FavoritesService } from './services/favorites.service';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
// import { NewsStorageService } from './services/newsStorage.service';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FavoritesComponent,
    AboutComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ArticleService, FavoritesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
