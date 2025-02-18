import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccomodationSliderComponent } from './accomodation-slider.component';

describe('AccomodationSliderComponent', () => {
  let component: AccomodationSliderComponent;
  let fixture: ComponentFixture<AccomodationSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccomodationSliderComponent]
    });
    fixture = TestBed.createComponent(AccomodationSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
