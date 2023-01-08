import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoanDisbursementComponent } from './loan-disbursement/loan-disbursement.component';
import { DisplayLoanDisbursementComponent } from './display-loan-disbursement/display-loan-disbursement.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoanStatusPipe } from './pipe/loan-status.pipe';
import { EmistatusPipe } from './pipe/emistatus.pipe';
const accRoute:Routes=[
 
  {path:"displayloanaccount" ,component:DisplayLoanDisbursementComponent},
  {path:"loandisbursement" ,component:LoanDisbursementComponent},
  
];


@NgModule({
  declarations: [
    LoanDisbursementComponent,
    DisplayLoanDisbursementComponent,
    LoanStatusPipe,
    EmistatusPipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(accRoute),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AccountManagerModule { }
