import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternationalTravelComponent } from './international-travel.component';

describe('InternationalTravelComponent', () => {
  let component: InternationalTravelComponent;
  let fixture: ComponentFixture<InternationalTravelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternationalTravelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternationalTravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
