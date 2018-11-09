import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextComponent } from './next.component';
import { BlockDirective, ElemDirective } from '../bem'

describe('NextComponent', () => {
  let component: NextComponent;
  let fixture: ComponentFixture<NextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextComponent, BlockDirective, ElemDirective ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit event', () => {
    spyOn(component.next, 'emit');

    component.go()

    expect(component.next.emit).toHaveBeenCalled()
  })
});
