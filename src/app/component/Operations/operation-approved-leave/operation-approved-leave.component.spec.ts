import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationApprovedLeaveComponent } from './operation-approved-leave.component';

describe('OperationApprovedLeaveComponent', () => {
  let component: OperationApprovedLeaveComponent;
  let fixture: ComponentFixture<OperationApprovedLeaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperationApprovedLeaveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperationApprovedLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
