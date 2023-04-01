import {Component, OnInit} from '@angular/core';
import {SharedService} from "../../../shared.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isSpinnerActive: boolean = true;

  constructor(private sharedService: SharedService, private router: Router) {
  }

  ngOnInit(): void {
  if(this.isSpinnerActive) {
    this.router.navigate(['home', 'spinner']);
  }
    this.sharedService.isSpinnerEnabledEmitter.subscribe(val => this.isSpinnerActive = val);
  }
}
