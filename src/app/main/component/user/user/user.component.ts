import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { UserService } from '../service/user.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  userInfoForm: FormGroup
  editMode: boolean = false

  constructor(private fb: FormBuilder, private userService: UserService) {
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
    const user = this.userService.getUser()
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
}
