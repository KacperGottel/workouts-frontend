import { Component, OnInit } from '@angular/core'
import { SharedService } from '../../../shared.service'
import { Router } from '@angular/router'
import { RouteNames } from '../../../model/RouteNames'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  isSpinnerActive: boolean = true

  constructor(private sharedService: SharedService, private router: Router) {}

  ngOnInit(): void {
    if (this.isSpinnerActive) {
      this.router.navigate([RouteNames.Home, RouteNames.Spinner])
    }
    this.sharedService.isSpinnerEnabledEmitter.subscribe(
      (val) => (this.isSpinnerActive = val)
    )
  }
}
