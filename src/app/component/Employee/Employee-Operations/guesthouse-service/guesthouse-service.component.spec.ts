import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuesthouseServiceComponent } from './guesthouse-service.component';

describe('GuesthouseServiceComponent', () => {
  let component: GuesthouseServiceComponent;
  let fixture: ComponentFixture<GuesthouseServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuesthouseServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuesthouseServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
