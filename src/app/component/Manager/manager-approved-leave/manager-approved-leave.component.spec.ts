import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerApprovedLeaveComponent } from './manager-approved-leave.component';

describe('ManagerApprovedLeaveComponent', () => {
  let component: ManagerApprovedLeaveComponent;
  let fixture: ComponentFixture<ManagerApprovedLeaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerApprovedLeaveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerApprovedLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
