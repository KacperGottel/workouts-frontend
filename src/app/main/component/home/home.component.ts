import { Component, OnInit } from '@angular/core'
import { SharedService } from '../../../shared.service'
import { Router } from '@angular/router'
import { RouteNames } from '../../../model/RouteNames'
import { ToastService } from '../../../utils/toast/toast.service'
import { AuthService } from '../../../auth/auth.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  isSpinnerActive: boolean = true

  constructor(
    private sharedService: SharedService,
    private router: Router,
    private toastService: ToastService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    if (this.isSpinnerActive) {
      this.router.navigate([RouteNames.Home, RouteNames.Spinner])
    }
    this.sharedService.isSpinnerEnabledEmitter.subscribe(
      (val) => (this.isSpinnerActive = val)
    )
    if (!this.authService.isLoggedIn()) {
      this.toastService.showOnSuccess('Welcome! Sign in and click a dumbbell!')
    }
  }
}
