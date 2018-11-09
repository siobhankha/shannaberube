import { TestBed, async } from '@angular/core/testing';
import { Component, Input } from '@angular/core'
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { BlockDirective, ElemDirective } from './common/bem'

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        MockHeaderComp,
        MockLandingComp,
        MockAboutComp,
        MockContactComp,
        BlockDirective,
        ElemDirective
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should set the active section', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;

    app.scroll('..target..')
    expect(app.activeSection).toEqual('..target..')
  })
});

@Component({selector: 'app-header', template: ''})
class MockHeaderComp {
  @Input() format: any
  @Input() activeSection: any
}

@Component({selector: 'app-landing', template: ''})
class MockLandingComp {
  @Input() active: any
}

@Component({selector: 'app-about', template: ''})
class MockAboutComp {
  @Input() active: any
}

@Component({selector: 'app-contact', template: ''})
class MockContactComp {
  @Input() active: any
}
