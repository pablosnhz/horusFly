import { ComponentFixture, TestBed } from '@angular/core/testing';
import { accommodationsComponent } from './accommodations.component';



describe('LodgingComponent', () => {
  let component: accommodationsComponent;
  let fixture: ComponentFixture<accommodationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [accommodationsComponent]
    });
    fixture = TestBed.createComponent(accommodationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
