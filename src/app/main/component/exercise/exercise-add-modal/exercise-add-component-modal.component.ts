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
  constructor(public modal: NgbActiveModal, private fb: FormBuilder) {
    this.exerciseForm = this.fb.group({
      name: ['', [Validators.required]],
      category: ['', [Validators.required]],
      description: ['', [Validators.required]],
      videoUrl: [''],
      imgUrl: [''],
      series: ['', [Validators.required]],
      reps: ['', [Validators.required]],
    })
  }
  ngAfterViewInit(): void {
    this.isReady = true
  }
  onSubmit() {}
}
