import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccDashboardComponent } from 'src/app/module/account/acc-dashboard/acc-dashboard.component';
import { PartyComponent } from 'src/app/module/account/party/party.component';
import { InventoryModule } from 'src/app/module/inventory/inventory.module';
import { UserComponent } from 'src/app/module/user/user/user.component';


const routes: Routes = [  
  {
    path:"create_account", component:PartyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminLayoutRoutingModule { }
