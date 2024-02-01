import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerLeaveRequestComponent } from './manager-leave-request.component';

describe('ManagerLeaveRequestComponent', () => {
  let component: ManagerLeaveRequestComponent;
  let fixture: ComponentFixture<ManagerLeaveRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerLeaveRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerLeaveRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
