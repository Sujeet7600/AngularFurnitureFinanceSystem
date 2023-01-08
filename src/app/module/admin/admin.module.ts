import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { DisplayEmployeeComponent } from './display-employee/display-employee.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const adminRoute:Routes=[
 
  {path:"displayemployee" ,component:DisplayEmployeeComponent},
  {path:"createemployee" ,component:CreateEmployeeComponent},
  
];

@NgModule({
  declarations: [
    CreateEmployeeComponent,
    DisplayEmployeeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoute),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
