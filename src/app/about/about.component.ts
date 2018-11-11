import { Component, OnInit, Input, Output, EventEmitter, ElementRef, AfterViewInit } from '@angular/core';

enum Direction {
  Up = 'Up',
  Down = 'Down',
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  @Input() active: boolean

  @Output() scrollToSection = new EventEmitter()

  initialized: boolean

  constructor(
    private el: ElementRef
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.initialized = true
  }

  scrolledToEnd(dir: Direction) {
    if(this.initialized) {
      const scrollable = this.el.nativeElement.firstChild
      const content = this.el.nativeElement.firstChild.firstChild
      return dir == Direction.Down ? scrollable.scrollTop + scrollable.offsetHeight >= content.scrollHeight : scrollable.scrollTop == 0
    }
  }

  nextSection() {
    this.scrollToSection.emit(2)
  }
}
