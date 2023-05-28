import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root',
})
export class UserService {
  // user: User = {}

  constructor(private http: HttpClient) {}

  getUser() {
    // this.http.get<User>(user).pipe()
  }
}
