import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { RouterModule, Routes } from '@angular/router'
import { HeaderComponent } from './header/component/header.component'
import { HomeComponent } from './main/component/home/home.component'
import { SpinnerComponent } from './main/component/spinner/spinner.component'
import { WorkoutComponent } from './main/component/workout/workout.component'
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { TokenInterceptor } from './auth/token.interceptor'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { ExerciseDetailsModalComponent } from './main/component/workout/exercise-details-modal/exercise-details-modal.component'

const routes: Routes = [
  { path: '', redirectTo: '/home/spinner', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [],
    children: [
      { path: 'spinner', component: SpinnerComponent },
      { path: 'workout', component: WorkoutComponent },
    ],
  },
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SpinnerComponent,
    WorkoutComponent,
    ExerciseDetailsModalComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    NgbModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
