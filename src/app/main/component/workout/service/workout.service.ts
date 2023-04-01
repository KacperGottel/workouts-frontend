import {Injectable} from '@angular/core';
import {map, Observable} from "rxjs";
import {Exercise, Workout} from "../../../../model/Workout";
import {HttpClient} from "@angular/common/http";
import {workout} from "../../../../model/Api";
import {JsonConvert} from "json2typescript";

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

 private jsonConverter: JsonConvert = new JsonConvert();
  constructor(private http: HttpClient) {
  }

  getWorkout(): Observable<Workout> {
    return this.http.get<Workout>(workout).pipe(map(response => this.jsonConverter.deserialize(response, Workout) as Workout));
  }
}

