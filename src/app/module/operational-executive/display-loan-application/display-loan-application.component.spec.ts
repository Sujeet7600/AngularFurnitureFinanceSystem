import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayLoanApplicationComponent } from './display-loan-application.component';

describe('DisplayLoanApplicationComponent', () => {
  let component: DisplayLoanApplicationComponent;
  let fixture: ComponentFixture<DisplayLoanApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayLoanApplicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayLoanApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
