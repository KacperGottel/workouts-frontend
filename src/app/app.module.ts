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
import { ExerciseDetailsModalComponent } from './main/component/exercise/exercise-details-modal/exercise-details-modal.component'
import { DatePipe, NgOptimizedImage } from '@angular/common'
import { YoutubeEmbeddedPipe } from './utils/youtube/youtube-embedded.pipe'
import { YoutubeComponent } from './utils/youtube/youtube.component'
import { SafePipe } from './utils/safe.pipe'
import { LoginComponent } from './main/component/login/login/login.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AuthGuard } from './auth/auth.guard'
import { AuthAdminGuard } from './auth/auth.admin.guard'
import { RouteNames } from './model/RouteNames'
import { RegisterComponent } from './main/component/register/register/register.component'
import { UserComponent } from './main/component/user/user/user.component'
import { ExerciseListComponent } from './main/component/exercise/exercise-list/exercise-list.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { PaginationComponent } from './utils/pagination/pagination/pagination.component'
import { ExerciseAddComponentModal } from './main/component/exercise/exercise-add-modal/exercise-add-component-modal.component'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { CustomToastComponent } from './utils/toast/custom-toast/custom-toast.component'
import { AdminComponent } from './main/component/admin/admin.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/' + RouteNames.Home + '/' + RouteNames.Spinner,
    pathMatch: 'full',
  },
  {
    path: RouteNames.Home,
    component: HomeComponent,
    children: [
      { path: RouteNames.Login, component: LoginComponent },
      { path: RouteNames.Register, component: RegisterComponent },
      {
        path: RouteNames.User,
        component: UserComponent,
        canActivate: [AuthGuard],
      },
      {
        path: RouteNames.Admin,
        component: AdminComponent,
        canActivate: [AuthAdminGuard],
      },
      {
        path: RouteNames.Spinner,
        component: SpinnerComponent,
      },
      {
        path: RouteNames.Workout,
        component: WorkoutComponent,
        canActivate: [AuthGuard],
      },
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
    YoutubeEmbeddedPipe,
    YoutubeComponent,
    SafePipe,
    LoginComponent,
    RegisterComponent,
    UserComponent,
    ExerciseListComponent,
    PaginationComponent,
    ExerciseAddComponentModal,
    CustomToastComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    NgbModule,
    NgOptimizedImage,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    DatePipe,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
