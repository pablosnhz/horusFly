import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightsSliderComponent } from './flights-slider.component';

describe('FlightsSliderComponent', () => {
  let component: FlightsSliderComponent;
  let fixture: ComponentFixture<FlightsSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlightsSliderComponent]
    });
    fixture = TestBed.createComponent(FlightsSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
