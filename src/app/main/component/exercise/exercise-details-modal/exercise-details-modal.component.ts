import { AfterViewInit, Component, Input } from '@angular/core'
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'
import { Exercise } from '../../../../model/Workout'
import { AuthService } from '../../../../auth/auth.service'
import { AdminService } from '../../admin/admin.service'
import { ToastService } from '../../../../utils/toast/toast.service'

@Component({
  selector: 'app-exercise-details-modal',
  templateUrl: './exercise-details-modal.component.html',
  styleUrls: ['./exercise-details-modal.component.css'],
})
export class ExerciseDetailsModalComponent implements AfterViewInit {
  @Input() exercise: Exercise | undefined
  isActive: boolean = true
  isAdmin: boolean = false
  constructor(
    public modal: NgbActiveModal,
    private authService: AuthService,
    private adminService: AdminService,
    private toastService: ToastService
  ) {
    this.isAdmin = this.authService.isAdmin
  }

  ngAfterViewInit(): void {
    this.isActive = false
  }

  onRejectClick(id: number | undefined) {
    if (id) {
      this.adminService.rejectExercise(id).subscribe(
        (response) => {
          this.modal.close()
          this.toastService.showOnSuccess(
            'Success! Exercise has been rejected.'
          )
        },
        (error) => {
          this.modal.close()
          this.toastService.showOnError('Fail! Exercise has not been rejected.')
        }
      )
    }
  }

  onAcceptClick(id: number | undefined) {
    if (id) {
      this.adminService.acceptExercise(id).subscribe(
        (response) => {
          this.modal.close()
          this.toastService.showOnSuccess(
            'Success! Exercise has been accepted.'
          )
        },
        (error) => {
          this.modal.close()
          this.toastService.showOnError('Fail! Exercise has not been accepted.')
        }
      )
    }
  }
}
