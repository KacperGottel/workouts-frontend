import { Component, OnInit } from '@angular/core'
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-exercise-add',
  templateUrl: './exercise-add-component-modal.component.html',
  styleUrls: ['./exercise-add-component-modal.component.css'],
})
export class ExerciseAddComponentModal implements OnInit {
  exerciseForm: FormGroup
  constructor(public modal: NgbActiveModal, private fb: FormBuilder) {
    this.exerciseForm = this.fb.group({
      name: [{ value: '' }, [Validators.required]],
      category: [{ value: '' }, [Validators.required]],
      description: [{ value: '' }, [Validators.required]],
      videoUrl: [{ value: '' }, [Validators.required]],
      imgUrl: [{ value: '' }, [Validators.required]],
      series: [{ value: '' }, [Validators.required]],
      reps: [{ value: '' }, [Validators.required]],
    })
  }
  ngOnInit(): void {}

  onSubmit() {}
}
