import { Component } from '@angular/core'
import { SharedService } from '../../shared.service'
import { Router } from '@angular/router'
import { AuthService } from '../../auth/auth.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  loginButtonName: string = ''

  constructor(
    private sharedService: SharedService,
    private router: Router,
    private authService: AuthService
  ) {
    this.loginButtonName = this.authService.isLoggedIn()
      ? 'SIGN OUT'
      : 'SIGN IN'
  }

  goHome() {
    this.router.navigate(['home', 'spinner'])
    this.sharedService.isSpinnerEnabledEmitter.emit(true)
  }

  goAdd() {}

  goLogin() {
    if (!this.authService.isLoggedIn() && this.loginButtonName === 'SIGN OUT') {
      this.authService.logout()
      this.loginButtonName = 'SIGN IN'
      this.router.navigate(['home', 'login'])
      this.sharedService.isSpinnerEnabledEmitter.emit(false)
    }
    this.router.navigate(['home', 'login'])
    this.sharedService.isSpinnerEnabledEmitter.emit(false)
  }
}
