import { Component, OnInit } from '@angular/core'
import { Exercise, Workout } from '../../../model/Workout'
import { WorkoutService } from './service/workout.service'
import { AuthService } from '../../../auth/auth.service'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { ExerciseDetailsModalComponent } from './exercise-details-modal/exercise-details-modal.component'

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: [
    './workout.component.css',
    '../workout/exercise-details-modal/exercise-details-modal.component.css',
  ],
})
export class WorkoutComponent implements OnInit {
  workout: Workout = new Workout()

  constructor(
    private workoutService: WorkoutService,
    private authService: AuthService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.authService.login('kacper@test.pl', 'W^7HH345GhloL0i^').subscribe()
    this.workoutService.getWorkout().subscribe((workout) => {
      this.workout = workout
      console.log(this.workout)
    })
  }

  showExerciseDetails(exercise: Exercise | undefined): void {
    if (exercise) {
      const modalRef = this.modalService.open(ExerciseDetailsModalComponent, {
        windowClass: 'exercise-details-modal',
        size: 'lg',
      })
      modalRef.componentInstance.exercise = exercise
    }
  }
}
