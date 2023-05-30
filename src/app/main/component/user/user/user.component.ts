import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { UserService } from '../service/user.service'
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  userInfoForm: FormGroup
  editMode: boolean = false

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private datePipe: DatePipe
  ) {
    this.userInfoForm = this.fb.group({
      email: [
        { value: '', disabled: true },
        [Validators.required, Validators.email],
      ],
      username: [
        { value: '', disabled: true },
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(15),
        ],
      ],
      registered: [{ value: '', disabled: true }],
    })
  }

  ngOnInit(): void {
    this.userService.getUser().subscribe((user) => {
      this.userInfoForm.get('email')?.setValue(user.email)
      this.userInfoForm.get('username')?.setValue(user.username)
      const inputDate = new Date(user.created ? user.created : '')
      const dateValue = this.datePipe.transform(inputDate, 'yyyy-MM-dd')
      this.userInfoForm.get('registered')?.setValue(dateValue)
    })
  }

  onEditClick() {
    this.editMode = true
    this.userInfoForm.get('email')?.enable()
    this.userInfoForm.get('username')?.enable()
  }

  onCancelEditClick() {
    this.editMode = false
    this.userInfoForm.get('email')?.disable()
    this.userInfoForm.get('username')?.disable()
  }

  onSubmit() {
    if (this.userInfoForm.valid) {
      const email = this.userInfoForm.get('email')?.value
      const username = this.userInfoForm.get('username')?.value
      this.userService.updateUser(email, username).subscribe(() => {
        this.userInfoForm.reset()
        this.ngOnInit()
      })
    }
  }
}
