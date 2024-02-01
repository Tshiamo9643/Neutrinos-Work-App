import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestPickUpsComponent } from './request-pick-ups.component';

describe('RequestPickUpsComponent', () => {
  let component: RequestPickUpsComponent;
  let fixture: ComponentFixture<RequestPickUpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestPickUpsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestPickUpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
