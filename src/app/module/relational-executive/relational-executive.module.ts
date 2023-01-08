import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoanApplicationComponent } from './loan-application/loan-application.component';
import { DisplayLoanApplicationComponent } from './display-loan-application/display-loan-application.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoanStatusPipe } from './pipe/loan-status.pipe';


const relRoute:Routes=[
 
  {path:"displayloanapplication" ,component:DisplayLoanApplicationComponent},
  {path:"loanapplication" ,component:LoanApplicationComponent}


  
];

@NgModule({
  declarations: [
    LoanApplicationComponent,
    DisplayLoanApplicationComponent,
    LoanStatusPipe
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(relRoute),
    FormsModule,
    ReactiveFormsModule,
   
  ]
})
export class RelationalExecutiveModule { }
