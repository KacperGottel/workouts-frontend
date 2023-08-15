import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Workout } from '../../../../model/Workout'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { workout, workoutPdf } from '../../../../model/Api'

@Injectable({
  providedIn: 'root',
})
export class WorkoutService {
  constructor(private http: HttpClient) {}

  getWorkout(): Observable<Workout> {
    return this.http.get<Workout>(workout)
  }

  downloadPdf(workout: Workout) {
    const headers = new HttpHeaders({
      Accept: 'application/pdf',
    })

    this.http
      .post(workoutPdf, workout, {
        headers: headers,
        responseType: 'blob' as 'json',
      })
      .subscribe((response: any) => {
        const blob = new Blob([response], { type: 'application/pdf' })
        const url = window.URL.createObjectURL(blob)

        const link = document.createElement('a')
        link.href = url
        link.download = 'file.pdf'
        link.click()

        window.URL.revokeObjectURL(url)
      })
  }
}
