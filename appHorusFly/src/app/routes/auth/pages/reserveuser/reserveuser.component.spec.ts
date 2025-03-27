import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveuserComponent } from './reserveuser.component';

describe('ReserveuserComponent', () => {
  let component: ReserveuserComponent;
  let fixture: ComponentFixture<ReserveuserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReserveuserComponent]
    });
    fixture = TestBed.createComponent(ReserveuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
