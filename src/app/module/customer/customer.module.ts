import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoanStatusComponent } from './loan-status/loan-status.component';
import { RouterModule, Routes } from '@angular/router';

const customerRoute:Routes=[
 
  {path:"loanstatus" ,component:LoanStatusComponent},

  
];

@NgModule({
  declarations: [
    LoanStatusComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(customerRoute)
  ]
})
export class CustomerModule { }
