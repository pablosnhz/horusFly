import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackagesSliderComponent } from './packages-slider.component';

describe('PackagesSliderComponent', () => {
  let component: PackagesSliderComponent;
  let fixture: ComponentFixture<PackagesSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PackagesSliderComponent]
    });
    fixture = TestBed.createComponent(PackagesSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
