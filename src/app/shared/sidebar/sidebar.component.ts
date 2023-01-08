import { Component, Input, OnInit } from '@angular/core';
import { Menu } from 'src/app/model/Menu';
declare const $: any;
// declare interface RouteInfo {
//   path: string;
//   title: string;
//   icon: string;
//   class: string;
// }

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Input() sideNavStatus: Boolean =false;
 
 public menuItems: any[];
 role: string;
  constructor() { }

  ngOnInit() {
    this.menuItems= Menu.menulist;
    console.log(this.menuItems);
    this.role=sessionStorage.getItem("role");
   
  }
}
