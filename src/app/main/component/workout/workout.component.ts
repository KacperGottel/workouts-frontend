import {Component, OnInit} from '@angular/core';
import {Workout} from "../../../model/Workout";
import {WorkoutService} from "./service/workout.service";

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css']
})
export class WorkoutComponent implements OnInit{
  workout: Workout;

  constructor(private workoutService: WorkoutService) {
  }

  ngOnInit(): void {
    this.workout = this.workoutService.getWorkout();
  }


}
