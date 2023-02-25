import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {home, userHome} from "../../model/Router";
import {UserGuard} from "../../authentication/guard/user.guard";
import {AuthGuard} from "../../authentication/guard/auth.guard";
import { UserComponent } from './components/user/user.component';
import {ApplicationModule} from "../application/application.module";


const routes: Routes = [
  {
    path: userHome, component: UserComponent,
    // children: [
    //   {path: home, component: , canActivate: [AuthGuard, UserGuard]},
    // ]
  }
];

@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    ApplicationModule,
  ]
})
export class UserModule { }
