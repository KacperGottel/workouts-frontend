import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { tap } from 'rxjs/operators'
import { Observable, Subject } from 'rxjs'
import { logout, registerUser, token, tokenCheck } from '../model/Api'
import { SharedService } from '../shared.service'
import { Router } from '@angular/router'
import { RouteNames } from '../model/RouteNames'

interface Token {
  token: string
  is_admin: boolean
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private tokenKey = 'workouts-token'
  private isUserLoggedIn = false
  public isLoggedSubject = new Subject<boolean>()
  public isAdmin = false
  public isAdminSubject = new Subject<boolean>()

  constructor(
    private http: HttpClient,
    private sharedService: SharedService,
    private router: Router
  ) {
    this.isLoggedSubject.subscribe((isLogged) => {
      this.isUserLoggedIn = isLogged
    })
    this.isAdminSubject.subscribe((isAdmin) => {
      this.isAdmin = isAdmin
    })
  }

  validateToken() {
    this.http
      .get<Token>(tokenCheck)
      .pipe(
        tap((res) => {
          this.isUserLoggedIn = true
          this.isLoggedSubject.next(true)
          this.handleAdmin(res)
        })
      )
      .subscribe()
  }

  login(username: string, password: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Basic ${window.btoa(username + ':' + password)}`,
    })
    return this.http.post<Token>(token, {}, { headers }).pipe(
      tap((res) => {
        localStorage.removeItem(this.tokenKey)
        localStorage.setItem(this.tokenKey, res.token.toString())
        this.isUserLoggedIn = true
        this.isLoggedSubject.next(true)
        this.handleAdmin(res)
      })
    )
  }

  getToken(): any {
    return localStorage.getItem(this.tokenKey)
  }

  logout(): Observable<any> {
    return this.http.post(logout, {}, {}).pipe(
      tap(() => {
        this.handleLogout()
      })
    )
  }

  isLoggedIn(): boolean {
    return this.isUserLoggedIn && this.getToken()
  }

  register(email: string, password: string, username: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    })
    const registerData = {
      username: username,
      email: email,
      password: password,
    }
    return this.http.post(registerUser, { registerData }, { headers })
  }

  private handleAdmin(res: Token) {
    if (res.is_admin) {
      this.isAdmin = res.is_admin
      this.isAdminSubject.next(res.is_admin)
      this.router
        .navigate([RouteNames.Home, RouteNames.Admin])
        .then(() => this.sharedService.isSpinnerEnabledEmitter.emit(false))
    }
  }

  private handleLogout() {
    this.isLoggedSubject.next(false)
    this.isAdminSubject.next(false)
    localStorage.removeItem(this.tokenKey)
    this.router
      .navigate([RouteNames.Home, RouteNames.Login])
      .then(() => this.sharedService.isSpinnerEnabledEmitter.emit(false))
  }
}
