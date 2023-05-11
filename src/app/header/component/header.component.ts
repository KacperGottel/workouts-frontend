import { Component, OnInit } from '@angular/core'
import { SharedService } from '../../shared.service'
import { Router } from '@angular/router'
import { AuthService } from '../../auth/auth.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  loginButtonName: string = 'SIGN IN'
  private isUserLogged = false

  constructor(
    private sharedService: SharedService,
    private router: Router,
    private authService: AuthService
  ) {}
  ngOnInit(): void {
    this.authService.isLoggedSubject.subscribe((isLogged) => {
      this.isUserLogged = isLogged
      this.loginButtonName = isLogged ? 'SIGN OUT' : 'SIGN IN'
    })
  }

  goHome() {
    this.router.navigate(['home', 'spinner'])
    this.sharedService.isSpinnerEnabledEmitter.emit(true)
  }

  goAdd() {}

  goLogin() {
    if (this.isUserLogged) {
      this.authService.logout()
      this.loginButtonName = 'SIGN IN'
    }
    this.router.navigate(['home', 'login'])
    this.sharedService.isSpinnerEnabledEmitter.emit(false)
  }
}
