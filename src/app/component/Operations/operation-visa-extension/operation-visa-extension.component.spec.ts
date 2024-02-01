import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationVisaExtensionComponent } from './operation-visa-extension.component';

describe('OperationVisaExtensionComponent', () => {
  let component: OperationVisaExtensionComponent;
  let fixture: ComponentFixture<OperationVisaExtensionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperationVisaExtensionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperationVisaExtensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
