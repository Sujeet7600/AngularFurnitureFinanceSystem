import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoanApplicationComponent } from './loan-application/loan-application.component';
import { DisplayLoanApplicationComponent } from './display-loan-application/display-loan-application.component';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoanStatusPipe } from 'src/app/module/credit-manager/pipe/loan-status.pipe';

const creditRoute:Routes=[
 
  {path:"displayloanapplication" ,component:DisplayLoanApplicationComponent},
  {path:"loanapplication" ,component:LoanApplicationComponent},
  
];

@NgModule({
  declarations: [
    LoanApplicationComponent,
    DisplayLoanApplicationComponent,
    LoanStatusPipe
   
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(creditRoute),
    ReactiveFormsModule,
    FormsModule,
    NgbModule

  ]
})
export class CreditManagerModule { }
