import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {HeaderComponent} from './header/component/header.component';
import { HomeComponent } from './home/component/home/home.component';
import { SpinnerComponent } from './home/component/spinner/spinner.component';


const routes: Routes = [
  {
    path: "home", component: HomeComponent, canActivate : [],
  }];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SpinnerComponent,

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
