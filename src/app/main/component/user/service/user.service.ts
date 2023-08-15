import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'
import { user, userExercises } from '../../../../model/Api'
import { User } from '../../../../model/User'
import { Observable } from 'rxjs'
import { Exercise } from '../../../../model/Workout'
import { Page } from '../../../../model/Page'

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUser(): Observable<User> {
    return this.http.get<User>(user)
  }
  getUserExercises(
    page: number = 0,
    size: number = 7,
    sort: string = 'category, asc',
    filter: string = ''
  ): Observable<Page<Exercise>> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('sort', sort)
      .set('filter', filter)
    return this.http.get<Page<Exercise>>(userExercises, { params })
  }

  updateUser(email: string, username: string): Observable<any> {
    return this.http.post(user, { email: email, username: username })
  }
}
