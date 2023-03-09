import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {HeaderComponent} from './header/component/header.component';
import {HomeComponent} from './main/component/home/home.component';
import {SpinnerComponent} from './main/component/spinner/spinner.component';
import {WorkoutComponent} from './main/component/workout/workout.component';
import {HttpClientModule} from "@angular/common/http";


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: "home", component: HomeComponent, canActivate: [], children: [
      {path: "spinner", component: SpinnerComponent},
      {path: "workout", component: WorkoutComponent}
    ]},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SpinnerComponent,
    WorkoutComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
