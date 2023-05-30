import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { user } from '../../../../model/Api'
import { User } from '../../../../model/User'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUser(): Observable<User> {
    return this.http.get<User>(user)
  }

  updateUser(email: string, username: string): Observable<any> {
    return this.http.post(user, { email: email, username: username })
  }
}
