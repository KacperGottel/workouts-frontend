import { Component, OnInit } from '@angular/core'
import { SharedService } from '../../shared.service'
import { Router } from '@angular/router'
import { AuthService } from '../../auth/auth.service'
import { RouteNames } from '../../model/RouteNames'
import { ToastService } from '../../utils/toast/toast.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  loginButtonName: string = 'SIGN IN'
  public isUserLogged = false
  public isAdmin = false

  constructor(
    private sharedService: SharedService,
    private router: Router,
    private authService: AuthService,
    private toastService: ToastService
  ) {}
  ngOnInit(): void {
    this.authService.isLoggedSubject.subscribe((isLogged) => {
      this.isUserLogged = isLogged
      this.loginButtonName = isLogged ? 'SIGN OUT' : 'SIGN IN'
    })
    this.authService.isAdminSubject.subscribe((isAdmin) => {
      this.isAdmin = isAdmin
    })
  }

  onHomeClick() {
    this.router.navigate([RouteNames.Home, RouteNames.Spinner])
    this.sharedService.isSpinnerEnabledEmitter.emit(true)
  }

  onUserPanelClick() {
    this.router.navigate([RouteNames.Home, RouteNames.User])
    this.sharedService.isSpinnerEnabledEmitter.emit(false)
  }

  onSignInOrOutClick() {
    if (this.isUserLogged) {
      this.authService.logout().subscribe(
        (res) => {
          this.loginButtonName = 'SIGN IN'
          this.toastService.showOnSuccess('Success! You have been signed out')
        },
        (error) => {
          this.toastService.showOnError('Fail! You have not been signed out')
        }
      )
    }
    this.router.navigate([RouteNames.Home, RouteNames.Login])
    this.sharedService.isSpinnerEnabledEmitter.emit(false)
  }
}
