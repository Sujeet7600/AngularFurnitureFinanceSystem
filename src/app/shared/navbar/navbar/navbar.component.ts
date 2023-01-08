
import { Component, ElementRef, EventEmitter, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() sideBarToggled = new EventEmitter<Boolean>();
  maneStatus: boolean = false;
  constructor(private modalService: NgbModal, private router: Router) { }

  ngOnInit() {
  }
  sideBar() {
    this.maneStatus = !this.maneStatus;
    this.sideBarToggled.emit(this.maneStatus);
  }
  createaccount() {
    this.router.navigate(["create_account"]);
  }


  openModal(targetModal) {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static'
    });

  }
  principal = 0;
  rate = 0;
  time = 0;
  emi;
  repayAmt;
  emi_calculator(p, r, t) {
    let emi;
    r = r / (12 * 100); // one month interest
    t = t * 12; // one month period
    emi = (p * r * Math.pow(1 + r, t)) / (Math.pow(1 + r, t) - 1);

    this.emi = (emi + 0.000414);
    this.repayAmt = emi * t
    console.log(this.emi)
  }

}
