import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationPortalComponent } from './operation-portal.component';

describe('OperationPortalComponent', () => {
  let component: OperationPortalComponent;
  let fixture: ComponentFixture<OperationPortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperationPortalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperationPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
