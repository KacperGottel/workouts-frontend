import {EventEmitter, Injectable, OnInit} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService implements OnInit{

  private isSpinnerEnabled = true;
  isSpinnerEnabledEmitter = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
    this.isSpinnerEnabledEmitter.subscribe(val => {
      this.isSpinnerEnabled = val;
    })
  }
}
