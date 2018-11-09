import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-next',
  templateUrl: './next.component.html',
  styleUrls: ['./next.component.scss']
})
export class NextComponent implements OnInit {

  @Output() next = new EventEmitter()

  @Input() active: boolean

  @Input() theme: string

  constructor() { }

  ngOnInit() {
  }

  go() {
    this.next.emit()
  }
}
