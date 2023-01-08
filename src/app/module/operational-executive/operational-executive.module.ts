import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { LoanApplicationComponent } from './loan-application/loan-application.component';
import { LoanSanctionComponent } from './loan-sanction/loan-sanction.component';
import { DisplayLoanApplicationComponent } from './display-loan-application/display-loan-application.component';
import { RouterModule, Routes } from '@angular/router';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoanStatusPipe } from './pipe/loan-status.pipe';




const oprRoute:Routes=[
  {path:"",component:DisplayLoanApplicationComponent},
  {path:"displayloanapplication" ,component:DisplayLoanApplicationComponent},
  {path:"loanapplication" ,component:LoanApplicationComponent},
  {path:"loansanction" ,component:LoanSanctionComponent},

  
];

@NgModule({
  declarations: [
    LoanApplicationComponent,
    LoanSanctionComponent,
    DisplayLoanApplicationComponent,
    LoanStatusPipe
   
    
   
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(oprRoute),    
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    
    
  ]
})
export class OperationalExecutiveModule { }
