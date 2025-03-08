import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailHotelComponent } from './detail-hotel.component';

describe('DetailHotelComponent', () => {
  let component: DetailHotelComponent;
  let fixture: ComponentFixture<DetailHotelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailHotelComponent]
    });
    fixture = TestBed.createComponent(DetailHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
