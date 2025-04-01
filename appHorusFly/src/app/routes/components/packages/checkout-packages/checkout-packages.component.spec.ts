import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutPackagesComponent } from './checkout-packages.component';

describe('CheckoutPackagesComponent', () => {
  let component: CheckoutPackagesComponent;
  let fixture: ComponentFixture<CheckoutPackagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckoutPackagesComponent]
    });
    fixture = TestBed.createComponent(CheckoutPackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
