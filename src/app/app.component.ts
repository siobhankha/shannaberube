import { Component, ComponentRef, ViewChild } from '@angular/core';
import { LandingComponent } from './landing/landing.component'
import { AboutComponent } from './about/about.component'
import { ContactComponent } from './contact/contact.component'

import { fromEvent } from 'rxjs';
import {
  distinctUntilChanged,
  filter,
  map,
  pairwise,
  share,
  throttleTime
} from 'rxjs/operators';

enum Direction {
  Up = 'Up',
  Down = 'Down',
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(AboutComponent) aboutEl

  activeSection = 0

  scrolling: boolean = false

  scrollPastDisabled: boolean = true

  sectionScrollPaused: boolean = false

  scroll(target) {
    this.activeSection = target
  }

  changeSection(dir: Direction) {
    if (dir == Direction.Up) {
      console.log('scrolling up');
      this.activeSection = this.activeSection > 0 ? this.activeSection - 1 : this.activeSection
    } else if (dir == Direction.Down) {
      console.log('scrolling Down');
      this.activeSection = this.activeSection < 2 ? this.activeSection + 1 : this.activeSection
    }
  }

  processEvent(e) {
    const direction = (<MouseWheelEvent>e).deltaY < 0 ? Direction.Up : Direction.Down
    if(!this.scrolling) {
      if(this.activeSection == 1 && this.aboutEl.scrolledToEnd(direction) && !this.sectionScrollPaused) {
        this.sectionScrollPaused = true
        setTimeout(() => {
          this.scrollPastDisabled = false
          this.sectionScrollPaused = false
        }, 600)
      }

      if(this.activeSection != 1 || !this.scrollPastDisabled) {
        this.scrolling = true
        setTimeout(() => {
          this.scrolling = false
          this.scrollPastDisabled = true
        }, 750)
        return direction
      }
    }
  }


  ngAfterViewInit() {
    const scroll$ = fromEvent(window, 'wheel').pipe(
      throttleTime(50),
      map((e): Direction => this.processEvent(e)),
      share()
    );

    const goingUp$ = scroll$.pipe(
      filter(direction => direction === Direction.Up)
    );

    const goingDown$ = scroll$.pipe(
      filter(direction => direction === Direction.Down)
    );

    goingUp$.subscribe(() => this.changeSection(Direction.Up));
    goingDown$.subscribe(() => this.changeSection(Direction.Down));
  }
}
