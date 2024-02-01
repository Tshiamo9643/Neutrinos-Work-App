import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSwitchAccountComponent } from './admin-switch-account.component';

describe('AdminSwitchAccountComponent', () => {
  let component: AdminSwitchAccountComponent;
  let fixture: ComponentFixture<AdminSwitchAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSwitchAccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminSwitchAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
