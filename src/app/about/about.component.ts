import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  @Input() active: boolean

  @Output() scrollToSection = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  nextSection() {
    this.scrollToSection.emit(2)
  }
}
