import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationDropoffComponent } from './operation-dropoff.component';

describe('OperationDropoffComponent', () => {
  let component: OperationDropoffComponent;
  let fixture: ComponentFixture<OperationDropoffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperationDropoffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperationDropoffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
