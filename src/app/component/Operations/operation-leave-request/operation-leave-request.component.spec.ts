import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationLeaveRequestComponent } from './operation-leave-request.component';

describe('OperationLeaveRequestComponent', () => {
  let component: OperationLeaveRequestComponent;
  let fixture: ComponentFixture<OperationLeaveRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperationLeaveRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperationLeaveRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
