import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { tap } from 'rxjs/operators'
import { Observable } from 'rxjs'
import { token } from '../model/Api'

interface Token {
  token: string
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private tokenKey = 'workouts-token'
  private isUserLoggedIn: boolean = false

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Basic ${window.btoa(username + ':' + password)}`,
    })
    return this.http.post<Token>(token, {}, { headers }).pipe(
      tap((res) => {
        localStorage.setItem(this.tokenKey, res.token.toString())
        this.isUserLoggedIn = true
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

  logout(): void {
    localStorage.removeItem(this.tokenKey)
    this.isUserLoggedIn = false
  }

  isLoggedIn(): boolean {
    if (!this.getToken()) {
      return false
    }
    return this.isUserLoggedIn
  }
}
