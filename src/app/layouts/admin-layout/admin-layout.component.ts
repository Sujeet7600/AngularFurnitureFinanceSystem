import { Component, OnInit} from '@angular/core';
import { Location, PopStateEvent } from '@angular/common';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
//import PerfectScrollbar from 'perfect-scrollbar';
import { filter, Subscription } from 'rxjs';
import { Loan } from 'src/app/model/Loan/loan';
import { LoanService } from 'src/app/shared/service/Loan/loan.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {
  title = 'admin-panel-layout';
  sideBarStatus: Boolean =false;

  sideBarToggler() {
    this.sideBarStatus = !this.sideBarStatus;
  }

 
  constructor( public location: Location, private router: Router) {}

  ngOnInit() {
    
   }
  
  
}
