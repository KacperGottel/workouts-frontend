import {Component, OnInit} from '@angular/core';
import {Workout} from "../../../model/Workout";
import {WorkoutService} from "./service/workout.service";
import {workout} from "../../../model/Api";

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css']
})
export class WorkoutComponent implements OnInit{
  workout: Workout | undefined;

  constructor(private workoutService: WorkoutService) {
  }

  ngOnInit(): void {
    this.workoutService.getWorkout().subscribe(workout => {
      this.workout = workout;
    });
    console.log(workout.toString());
  }


}
