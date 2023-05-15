import { Component } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { RouteNames } from '../../../../model/RouteNames'
import { AuthService } from '../../../../auth/auth.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [
    './register.component.css',
    '../../login/login/login.component.css',
  ],
})
export class RegisterComponent {
  registerForm: FormGroup
  arePasswordsIdentical: boolean = false
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      username: ['', [Validators.required]],
    })
  }
  onCancel() {
    this.router.navigate([RouteNames.Home, RouteNames.Spinner])
  }
  onSubmit() {
    const email = this.registerForm.get('email')?.value
    const username = this.registerForm.get('username')?.value
    const password = this.registerForm.get('password')?.value
    const repeatPassword = this.registerForm.get('repeat-password')?.value
    this.arePasswordsIdentical = password === repeatPassword
    this.authService.register(email, password, username).subscribe(() => {
      this.router.navigate([RouteNames.Home, RouteNames.Spinner])
    })
  }
}
