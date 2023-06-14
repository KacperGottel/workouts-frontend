import { Component, OnInit } from '@angular/core'
import { Exercise, Workout } from '../../../model/Workout'
import { WorkoutService } from './service/workout.service'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { ExerciseDetailsModalComponent } from '../exercise/exercise-details-modal/exercise-details-modal.component'

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: [
    './workout.component.css',
    '../exercise/exercise-details-modal/exercise-details-modal.component.css',
  ],
})
export class WorkoutComponent implements OnInit {
  workout: Workout = new Workout()

  constructor(
    private workoutService: WorkoutService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.workoutService.getWorkout().subscribe((workout) => {
      this.workout = workout
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
