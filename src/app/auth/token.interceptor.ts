import { Injectable } from '@angular/core'
import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http'
import { AuthService } from './auth.service'
import { registerUser, token as tokenURL } from '../model/Api'

@Injectable({
  providedIn: 'root',
})
export class TokenInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const token = this.authService.getToken()
    if (token && req.url != tokenURL && req.url != registerUser) {
      const authReq = req.clone({
        withCredentials: true,
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      })
      return next.handle(authReq)
    }
    return next.handle(req)
  }
}
