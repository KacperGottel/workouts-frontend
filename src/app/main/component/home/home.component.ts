import {Component, OnInit} from '@angular/core';
import {SpinnerComponent} from "../spinner/spinner.component";
import {SharedService} from "../../../shared.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isSpinnerActive: boolean = true;

  constructor(private sharedService: SharedService) {
  }

  ngOnInit(): void {
    this.sharedService.isSpinnerEnabledEmitter.subscribe(val => this.isSpinnerActive = val);
  }

}
