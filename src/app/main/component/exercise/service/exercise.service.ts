import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Exercise } from '../../../../model/Workout'
import { exercises } from '../../../../model/Api'

@Injectable({
  providedIn: 'root',
})
export class ExerciseService {
  constructor(private http: HttpClient) {}

  addNewExercise(exercise: Exercise): Observable<Exercise> {
    return this.http.post<Exercise>(exercises, exercise)
  }
}
