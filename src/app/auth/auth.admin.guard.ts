import { Injectable } from '@angular/core'
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router'
import { Observable } from 'rxjs'
import { AuthService } from './auth.service'
import { RouteNames } from '../model/RouteNames'

@Injectable({
  providedIn: 'root',
})
export class AuthAdminGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> {
    if (this.authService.isLoggedIn() && this.authService.isAdmin) {
      return true
    }
    this.router.navigate([RouteNames.Home, RouteNames.Login])
    return false
  }
}
