import { Component } from '@angular/core'
import { SharedService } from '../../shared.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private sharedService: SharedService, private router: Router) {}

  goHome() {
    this.router.navigate(['home', 'spinner'])
    this.sharedService.isSpinnerEnabledEmitter.emit(true)
  }
}
