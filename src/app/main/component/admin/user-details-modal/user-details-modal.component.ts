import { AfterViewInit, Component } from '@angular/core'
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'
import { UserStatus } from '../../../../model/User'
import { AdminService } from '../admin.service'
import { ToastService } from '../../../../utils/toast/toast.service'

@Component({
  selector: 'app-user-details-modal',
  templateUrl: './user-details-modal.component.html',
  styleUrls: ['./user-details-modal.component.css'],
})
export class UserDetailsModal implements AfterViewInit {
  isReady = false
  user: any

  constructor(
    public modal: NgbActiveModal,
    private adminService: AdminService,
    private toast: ToastService
  ) {}
  ngAfterViewInit(): void {
    if (this.user) {
      this.isReady = true
    }
  }

  onBlockClick() {
    console.log(this.user.id)
    this.adminService.blockUser(this.user.id).subscribe(
      (response) => {
        this.modal.close('blocked')
        this.toast.showOnSuccess('User ' + this.user.email + ' blocked')
      },
      (error) => {
        this.modal.close('fail')
        this.toast.showOnError('Fail to block ' + this.user.email)
      }
    )
  }
  onRemoveClick() {
    this.adminService.removeUser(this.user.id).subscribe(
      (response) => {
        this.modal.close('removed')
        this.toast.showOnSuccess('User ' + this.user.email + ' removed')
      },
      (error) => {
        this.modal.close('fail')
        this.toast.showOnError('Fail to remove ' + this.user.email)
      }
    )
  }

  protected readonly UserStatus = UserStatus
}
