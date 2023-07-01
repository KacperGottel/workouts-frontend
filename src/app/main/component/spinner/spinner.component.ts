import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { SharedService } from '../../../shared.service'
import { RouteNames } from '../../../model/RouteNames'

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css'],
})
export class SpinnerComponent implements OnInit {
  constructor(private sharedService: SharedService, private router: Router) {}
  ngOnInit(): void {}
  clickDumbbell() {
    this.router.navigate([RouteNames.Home, RouteNames.Workout])
    this.sharedService.isSpinnerEnabledEmitter.emit(false)
  }
}
