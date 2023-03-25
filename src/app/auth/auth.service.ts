import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {token} from "../model/Api";

interface Token {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private tokenKey = 'workouts-token';

  constructor(private http: HttpClient) {
  }

  login(username: string, password: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Basic ${btoa(`${username}:${password}`)}`
    });
    return this.http.post<Token>(token, {}, {headers}).pipe(
      tap(res => {
        localStorage.setItem(this.tokenKey, res.token.toString());
      })
    );
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  addTokenHeader(headers: HttpHeaders): HttpHeaders {
    const token = this.getToken();
    return headers.append('Authorization', `Bearer ${token}`);
  }
}
