import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPolicyComponent } from './admin-policy.component';

describe('AdminPolicyComponent', () => {
  let component: AdminPolicyComponent;
  let fixture: ComponentFixture<AdminPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPolicyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
