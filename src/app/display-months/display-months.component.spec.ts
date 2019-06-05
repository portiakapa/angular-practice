import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayMonthsComponent } from './display-months.component';

describe('DisplayMonthsComponent', () => {
  let component: DisplayMonthsComponent;
  let fixture: ComponentFixture<DisplayMonthsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayMonthsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayMonthsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
