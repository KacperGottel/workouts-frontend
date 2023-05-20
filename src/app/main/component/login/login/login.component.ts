import { Component } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { AuthService } from '../../../../auth/auth.service'
import { Router } from '@angular/router'
import { RouteNames } from '../../../../model/RouteNames'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup
  registerRoute: string = '/' + RouteNames.Home + '/' + RouteNames.Register
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    })
  }
  onCancel() {
    this.router.navigate([RouteNames.Home, RouteNames.Spinner])
  }
  onSubmit() {
    const email = this.loginForm.get('email')?.value
    const password = this.loginForm.get('password')?.value
    this.authService.login(email, password).subscribe(() => {
      this.router.navigate([RouteNames.Home, RouteNames.Spinner])
    })
  }
}
