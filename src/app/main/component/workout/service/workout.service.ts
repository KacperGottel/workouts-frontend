import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Workout} from "../../../../model/Workout";
import {HttpClient} from "@angular/common/http";
import {workout} from "../../../../model/Api";
import {environment} from "../../../../../enviroment/environment";

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  constructor(private http: HttpClient) { }

  getWorkout(): Observable<Workout> {
    return this.http.get<Workout>(workout);
  }
}
