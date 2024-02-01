import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminApproveLeaveComponent } from './admin-approve-leave.component';

describe('AdminApproveLeaveComponent', () => {
  let component: AdminApproveLeaveComponent;
  let fixture: ComponentFixture<AdminApproveLeaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminApproveLeaveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminApproveLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
