import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutAccomodationComponent } from './checkout-accomodation.component';

describe('CheckoutAccomodationComponent', () => {
  let component: CheckoutAccomodationComponent;
  let fixture: ComponentFixture<CheckoutAccomodationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckoutAccomodationComponent]
    });
    fixture = TestBed.createComponent(CheckoutAccomodationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
