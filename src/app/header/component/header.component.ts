import { Component, OnInit } from '@angular/core'
import { SharedService } from '../../shared.service'
import { Router } from '@angular/router'
import { AuthService } from '../../auth/auth.service'
import { RouteNames } from '../../model/RouteNames'

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
    this.router.navigate([RouteNames.Home, RouteNames.Spinner])
    this.sharedService.isSpinnerEnabledEmitter.emit(true)
  }

  goAdd() {}

  handleLogging() {
    if (this.isUserLogged) {
      this.authService.logout().subscribe(() => {
        this.loginButtonName = 'SIGN IN'
      })
    }
    this.router.navigate([RouteNames.Home, RouteNames.Login])
    this.sharedService.isSpinnerEnabledEmitter.emit(false)
  }
}
