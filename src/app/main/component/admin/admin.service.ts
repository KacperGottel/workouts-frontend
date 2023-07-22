import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs'
import { adminExercises } from '../../../model/Api'
import { Page } from '../../../model/Page'
import { Exercise } from '../../../model/Workout'

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private http: HttpClient) {}

  getExercisesForAcceptance(
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
    return this.http.get<Page<Exercise>>(adminExercises, { params })
  }

  rejectExercise(id: number): Observable<any> {
    let params = new HttpParams().set('id', id)
    return this.http.delete<any>(adminExercises, { params })
  }

  acceptExercise(id: number): Observable<any> {
    let params = new HttpParams().set('id', id)
    return this.http.post<any>(adminExercises, {}, { params })
  }
}
