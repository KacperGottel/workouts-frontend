import { Component, Inject } from '@angular/core'
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar'

@Component({
  selector: 'app-custom-toast',
  templateUrl: './custom-toast.component.html',
  styleUrls: ['./custom-toast.component.css'],
})
export class CustomToastComponent {
  message: string
  backgroundColor: string

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) {
    this.message = data.message
    this.backgroundColor = data.backgroundColor
  }
}
