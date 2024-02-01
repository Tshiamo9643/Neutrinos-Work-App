import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerVisaApplicationComponent } from './manager-visa-application.component';

describe('ManagerVisaApplicationComponent', () => {
  let component: ManagerVisaApplicationComponent;
  let fixture: ComponentFixture<ManagerVisaApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerVisaApplicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerVisaApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
