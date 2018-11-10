import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() format: string = ''

  @Input() activeSection: number

  @Output() scrollToSection = new EventEmitter()

  constructor() { }

  ngOnInit() {

  }

  scroll(target) {
    this.scrollToSection.emit(target)
  }

}
