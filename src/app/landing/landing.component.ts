import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  @Output() scrollToSection = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  nextSection() {
    this.scrollToSection.emit(1)
  }
}
