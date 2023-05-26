import { Injectable, OnInit } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { tap } from 'rxjs/operators'
import { Observable, Subject } from 'rxjs'
import { logout, registerUser, token } from '../model/Api'
import { SharedService } from '../shared.service'
import { Router } from '@angular/router'
import { RouteNames } from '../model/RouteNames'

interface Token {
  token: string
}

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnInit {
  private tokenKey = 'workouts-token'
  private isUserLoggedIn = false
  public isLoggedSubject = new Subject<boolean>()

  constructor(
    private http: HttpClient,
    private sharedService: SharedService,
    private router: Router
  ) {
    this.isLoggedSubject.subscribe((isLogged) => {
      this.isUserLoggedIn = isLogged
    })
  }

  ngOnInit(): void {}

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
      })
    )
  }

  getToken(): string | null | undefined {
    return localStorage.getItem(this.tokenKey)
  }

  addTokenHeader(headers: HttpHeaders): HttpHeaders {
    const token = this.getToken()
    return headers.append('Authorization', `Bearer ${token}`)
  }

  logout(): Observable<any> {
    return this.http.post(logout, {}, {}).pipe(
      tap(() => {
        this.isLoggedSubject.next(false)
        localStorage.removeItem(this.tokenKey)
        this.router.navigate([RouteNames.Home, RouteNames.Login])
        this.sharedService.isSpinnerEnabledEmitter.emit(false)
      })
    )
  }

  isLoggedIn(): boolean {
    return (
      this.isUserLoggedIn &&
      this.getToken() != undefined &&
      this.getToken() != null &&
      this.getToken() != ''
    )
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
    return this.http
      .post(registerUser, { registerData }, { headers })
      .pipe(tap(() => {}))
  }
}
