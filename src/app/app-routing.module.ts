import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { HomeComponent } from './home/home.component';
import { NotFoundComponentComponent } from './home/not-found-component/not-found-component.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { AccountManagerModule } from './module/account-manager/account-manager.module';
import { AdminModule } from './module/admin/admin.module';
import { CreditManagerModule } from './module/credit-manager/credit-manager.module';
import { CustomerModule } from './module/customer/customer.module';
import { OperationalExecutiveModule } from './module/operational-executive/operational-executive.module';
import { RelationalExecutiveModule } from './module/relational-executive/relational-executive.module';

const routes: Routes = [
  {
    path:"",redirectTo: 'home', pathMatch: 'full'
  },
  {
    path:"home" ,component:HomeComponent
   
  },
  {
    path:"login", component:LoginComponent
  },
  {
    path:"role", component:AdminLayoutComponent,
    canActivate:[AuthGuard],
    children:[
      {path:"account" ,loadChildren :()=>AccountManagerModule},
      {path:"administration" ,loadChildren :()=>AdminModule},
      {path:"credit" ,loadChildren :()=>CreditManagerModule},
      {path:"customer" ,loadChildren :()=>CustomerModule},
      {path:"operational" ,loadChildren :()=>OperationalExecutiveModule},
      {path:"relational" ,loadChildren :()=>RelationalExecutiveModule}
      
    ]
  },
  { path: '**', component: NotFoundComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
