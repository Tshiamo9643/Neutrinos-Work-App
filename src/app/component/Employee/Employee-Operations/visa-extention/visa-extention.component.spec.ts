import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisaExtentionComponent } from './visa-extention.component';

describe('VisaExtentionComponent', () => {
  let component: VisaExtentionComponent;
  let fixture: ComponentFixture<VisaExtentionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisaExtentionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisaExtentionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
