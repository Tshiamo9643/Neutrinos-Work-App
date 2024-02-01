import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationPickUpsComponent } from './operation-pick-ups.component';

describe('OperationPickUpsComponent', () => {
  let component: OperationPickUpsComponent;
  let fixture: ComponentFixture<OperationPickUpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperationPickUpsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperationPickUpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
