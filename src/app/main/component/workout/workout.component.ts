import {Component, OnInit} from '@angular/core';
import {Exercise, ExerciseCategory, Workout} from "../../../model/Workout";
import {WorkoutService} from "./service/workout.service";
import {AuthService} from "../../../auth/auth.service";

function initWorkout() : Workout {
  return new Workout(
    new Exercise(1,ExerciseCategory.PUSH, '404 - NOT FOUND', '', '',''),
    new Exercise(1,ExerciseCategory.PUSH, '404 - NOT FOUND', '', '',''),
    new Exercise(1,ExerciseCategory.PUSH, '404 - NOT FOUND', '', '',''),
    new Exercise(1,ExerciseCategory.PUSH, '404 - NOT FOUND', '', '',''),
    new Exercise(1,ExerciseCategory.PUSH, '404 - NOT FOUND', '', '',''),
    new Exercise(1,ExerciseCategory.PUSH, '404 - NOT FOUND', '', '',''),
    new Exercise(1,ExerciseCategory.PUSH, '404 - NOT FOUND', '', '',''),
    new Exercise(1,ExerciseCategory.PUSH, '404 - NOT FOUND', '', '',''),
  );
}

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css']
})
export class WorkoutComponent implements OnInit{
   workout = initWorkout();


  constructor(private workoutService: WorkoutService, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.login('kacper@test.pl','W^7HH345GhloL0i^').subscribe();
    this.workoutService.getWorkout().subscribe(workout => {
      this.workout = workout;
    });
  }
}
