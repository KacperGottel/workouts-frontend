import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {HeaderComponent} from './header/component/header.component';
import { HomeComponent } from './home/component/home/home.component';


const routes: Routes = [
  {
    path: "home", component: HomeComponent, canActivate : [],
  }];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
