import { Component, OnInit } from '@angular/core'
import { Workout } from '../../../model/Workout'
import { WorkoutService } from './service/workout.service'
import { AuthService } from '../../../auth/auth.service'

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css'],
})
export class WorkoutComponent implements OnInit {
  workout: Workout = new Workout()

  constructor(
    private workoutService: WorkoutService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.authService.login('kacper@test.pl', 'W^7HH345GhloL0i^').subscribe()
    this.workoutService.getWorkout().subscribe((workout) => {
      this.workout = workout
    })
  }
}
