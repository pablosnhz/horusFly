import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutFlightsComponent } from './checkout-flights.component';

describe('CheckoutFlightsComponent', () => {
  let component: CheckoutFlightsComponent;
  let fixture: ComponentFixture<CheckoutFlightsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckoutFlightsComponent]
    });
    fixture = TestBed.createComponent(CheckoutFlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
