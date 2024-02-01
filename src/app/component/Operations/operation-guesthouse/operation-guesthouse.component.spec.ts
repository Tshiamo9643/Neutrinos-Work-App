import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationGuesthouseComponent } from './operation-guesthouse.component';

describe('OperationGuesthouseComponent', () => {
  let component: OperationGuesthouseComponent;
  let fixture: ComponentFixture<OperationGuesthouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperationGuesthouseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperationGuesthouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
