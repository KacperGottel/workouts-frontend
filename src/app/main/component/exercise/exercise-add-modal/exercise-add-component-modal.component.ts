import { AfterViewInit, Component, ViewEncapsulation } from '@angular/core'
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ExerciseService } from '../service/exercise.service'
import { Exercise, ExerciseCategory } from '../../../../model/Workout'
import { ToastService } from '../../../../utils/toast/toast.service'

@Component({
  selector: 'app-exercise-add',
  templateUrl: './exercise-add-component-modal.component.html',
  styleUrls: ['./exercise-add-component-modal.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class ExerciseAddComponentModal implements AfterViewInit {
  exerciseForm: FormGroup
  isReady = false
  categories = [
    ExerciseCategory.LEGS,
    ExerciseCategory.PUSH,
    ExerciseCategory.PULL,
    ExerciseCategory.ACCESSORY,
  ]
  constructor(
    public modal: NgbActiveModal,
    private fb: FormBuilder,
    private exerciseService: ExerciseService,
    private toastService: ToastService
  ) {
    this.exerciseForm = this.fb.group({
      name: ['', [Validators.required]],
      category: ['', [Validators.required]],
      description: ['', [Validators.required]],
      videoUrl: [''],
      imgUrl: [''],
      series: ['', [Validators.required, Validators.min(3), Validators.max(8)]],
      reps: ['', [Validators.required, Validators.min(2), Validators.max(15)]],
    })
  }
  ngAfterViewInit(): void {
    this.isReady = true
  }
  onSubmit() {
    if (this.exerciseForm.valid && this.exerciseForm.touched) {
      const name = this.exerciseForm.get('name')?.value
      const category = this.exerciseForm.get('category')?.value
      const description = this.exerciseForm.get('description')?.value
      const videoUrl = this.exerciseForm.get('videoUrl')?.value
      const imgUrl = this.exerciseForm.get('imgUrl')?.value
      const series = this.exerciseForm.get('series')?.value
      const reps = this.exerciseForm.get('reps')?.value

      const newExercise = new Exercise()
      newExercise.name = name
      newExercise.category = category
      newExercise.description = description
      newExercise.video_url = videoUrl
      newExercise.img_url = imgUrl
      newExercise.series = series
      newExercise.reps = reps

      this.exerciseService.addNewExercise(newExercise).subscribe(
        (response) => {
          this.exerciseForm.reset()
          this.modal.close()
          this.toastService.showOnSuccess('Success! Exercise has been added.')
        },
        (error) => {
          this.toastService.showOnError('Fail! Exercise has not been added.')
        }
      )
    }
  }
}
