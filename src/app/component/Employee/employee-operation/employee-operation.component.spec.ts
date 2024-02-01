import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeOperationComponent } from './employee-operation.component';

describe('EmployeeOperationComponent', () => {
  let component: EmployeeOperationComponent;
  let fixture: ComponentFixture<EmployeeOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeOperationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
