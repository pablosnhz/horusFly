import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPackagesComponent } from './detail-packages.component';

describe('DetailPackagesComponent', () => {
  let component: DetailPackagesComponent;
  let fixture: ComponentFixture<DetailPackagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailPackagesComponent]
    });
    fixture = TestBed.createComponent(DetailPackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
