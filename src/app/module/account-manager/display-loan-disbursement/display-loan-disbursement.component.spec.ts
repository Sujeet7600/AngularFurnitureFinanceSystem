import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayLoanDisbursementComponent } from './display-loan-disbursement.component';

describe('DisplayLoanDisbursementComponent', () => {
  let component: DisplayLoanDisbursementComponent;
  let fixture: ComponentFixture<DisplayLoanDisbursementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayLoanDisbursementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayLoanDisbursementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
