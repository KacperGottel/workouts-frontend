import { Component, OnDestroy, OnInit } from '@angular/core'
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
export class RegisterComponent implements OnInit, OnDestroy {
  registerForm: FormGroup
  arePasswordsIdentical: boolean = false
  passwordPattern = '^(?=.*[\\w\\W]).{8,16}$'
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [Validators.required, Validators.pattern(this.passwordPattern)],
      ],
      repeatPassword: [
        '',
        [Validators.required, Validators.pattern(this.passwordPattern)],
      ],
      username: ['', [Validators.required]],
    })
  }

  ngOnDestroy(): void {
    this.registerForm.reset()
  }

  ngOnInit(): void {
    this.registerForm
      .get('repeatPassword')
      ?.valueChanges.subscribe((repeatPassword) => {
        const password = this.registerForm.get('password')?.value
        this.arePasswordsIdentical = password === repeatPassword
      })
  }
  onCancel() {
    this.registerForm.reset()
    this.router.navigate([RouteNames.Home, RouteNames.Spinner])
  }
  onSubmit() {
    const email = this.registerForm.get('email')?.value
    const username = this.registerForm.get('username')?.value
    const password = this.registerForm.get('password')?.value
    if (this.arePasswordsIdentical && this.registerForm.valid) {
      this.authService.register(email, password, username).subscribe(() => {
        this.router.navigate([RouteNames.Home, RouteNames.Spinner])
      })
    }
  }
}
