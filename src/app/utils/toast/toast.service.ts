import { Injectable } from '@angular/core'
import { MatSnackBar } from '@angular/material/snack-bar'
import { CustomToastComponent } from './custom-toast/custom-toast.component'

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private snackBar: MatSnackBar) {}

  showOnSuccess(message: string) {
    this.show(message, 3000, 'toast-green')
  }
  showOnError(message: string) {
    this.show(message, 3000, 'toast-red')
  }

  private show(
    message: string,
    duration: number = 3000,
    backgroundColor: string = 'toast-green'
  ): void {
    this.snackBar.openFromComponent(CustomToastComponent, {
      duration: duration,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      data: { message, backgroundColor },
    })
  }
}
