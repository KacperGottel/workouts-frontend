import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {adminHome, home, userHome} from "./model/Router";
import {AdminGuard} from "./authentication/guard/admin.guard";
import {UserGuard} from "./authentication/guard/user.guard";


const routes: Routes = [
  {
    path: home, loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: userHome, loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule), canActivate: [UserGuard]
  },
  {
    path: adminHome,
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule), canActivate: [AdminGuard]
  }
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
