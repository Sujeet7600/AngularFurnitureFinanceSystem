import { getLocaleDateFormat, getLocaleMonthNames } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgbDate, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EmiStatus } from 'src/app/model/EmiStatus/emi-status';

import { Loan } from 'src/app/model/Loan/loan';
import { EmiStatusService } from 'src/app/shared/service/EmiStatus/emi-status.service';
import { LoanService } from 'src/app/shared/service/Loan/loan.service';

@Component({
  selector: 'app-display-loan-disbursement',
  templateUrl: './display-loan-disbursement.component.html',
  styleUrls: ['./display-loan-disbursement.component.css']
})
export class DisplayLoanDisbursementComponent implements OnInit {


  constructor(private modalService: NgbModal, private service: LoanService, private emiservice: EmiStatusService) { }
 
  retrievedDoc: any;

  ngOnInit(): void {
    this.service.getData().subscribe((data: Loan[]) => {
      this.retrievedDoc = data;
    });

  }

  deleteData(id: number) {
  
  }

  editData(l: Loan) {
   
  }
  Edit() {

  }
  image: string;
  openModalI(targetModal, str: string) {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static'
    });
    this.image = str;

  }
 

  repayAmt;
  l: Loan;
  openModal(targetModal, loan: Loan) {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static'
    });
    this.l = loan;
    this.l.emi = ((this.l.loanAmount * (this.l.rateOfInterest / (12 * 100)) * Math.pow(1 + (this.l.rateOfInterest / (12 * 100)), (this.l.tenure * 12))) / (Math.pow(1 + (this.l.rateOfInterest / (12 * 100)), (this.l.tenure * 12)) - 1) + 0.000414);
    this.repayAmt = this.l.emi * (this.l.tenure * 12)
    console.log(this.l.emi)

  }
  
  emiStatus: EmiStatus = {
    emiId: 0,
    loanId: 0,
    installmentNo: 0,
    installmentAmount: 0,
    installmentDate: undefined,
    installmentStatus: 0
  }
  date: Date;

  Disburs(l: Loan) {
    console.log(l)

    let n = l.tenure * 12

    for (let i = 1; i <= n; i++) {
      this.emiStatus.loanId = l.loanId
      this.emiStatus.installmentAmount = l.emi
      this.emiStatus.installmentStatus = 1
      this.emiStatus.installmentNo = i;
      this.date = new Date();
      this.date.setMonth(new Date().getMonth() + i);
      console.log(this.date);
      this.emiStatus.installmentDate = this.date;
      // this.emiLoanData.push(this.emiStatus);
      this.emiservice.saveData(this.emiStatus).subscribe()

    }
     //l.loanStatus=7
     //this.service.updateData(l,l.loanId).subscribe()
    this.modalService.dismissAll(); 
  }
  id:number;
  openLedgerModal(targetModal, loan: Loan){
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static'
    });
    this.emiservice.getLoanEmiData(loan.loanId).subscribe((data: EmiStatus[]) => {
      this.emiinst= data;
    });
    this.id=loan.loanId;
  }
  emiinst:any;
  paid(e: EmiStatus) {
 alert("in emistatuschange")
    e.installmentStatus=2;
    this.emiservice.updateData(e).subscribe()
  }
  Proceed(l: Loan, s: number) {
    l.loanStatus = s;
    this.modalService.dismissAll();

    this.service.updateData(l, l.loanId).subscribe()
  }


}