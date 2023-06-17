import { AfterViewInit, Component } from '@angular/core'
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-exercise-add',
  templateUrl: './exercise-add-component-modal.component.html',
  styleUrls: ['./exercise-add-component-modal.component.css'],
})
export class ExerciseAddComponentModal implements AfterViewInit {
  exerciseForm: FormGroup
  isReady = false
  categories = ['PUSH', 'PULL', 'LEGS', 'ACCESSORY']
  constructor(public modal: NgbActiveModal, private fb: FormBuilder) {
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
    }
  }
}
