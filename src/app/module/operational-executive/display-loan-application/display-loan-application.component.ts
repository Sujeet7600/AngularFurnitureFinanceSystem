import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Loan } from 'src/app/model/Loan/loan';
import { LoanService } from 'src/app/shared/service/Loan/loan.service';



@Component({
  selector: 'app-display-loan-application',
  templateUrl: './display-loan-application.component.html',
  styleUrls: ['./display-loan-application.component.css']
})
export class DisplayLoanApplicationComponent implements OnInit {

  constructor(private modalService: NgbModal, private service: LoanService) { }


  retrievedDoc: any;
  emplist!: Loan[];
  
  ngOnInit(): void {
    this.service.getData().subscribe((data: Loan[]) => {
      this.retrievedDoc = data;
    });

  }
  l: Loan;
  deleteData(id: number) {
    //     this.service.deleteData(id).subscribe();
    //     window.location.reload();
  }

  editData(l: Loan) {
    //      this.service.e = Object.assign({},emp);
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

  openModal(targetModal, loan: Loan) {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static'
    });
    this.l = loan;

  }
  onSubmit(l: Loan) {
    this.modalService.dismissAll();   
    this.service.updateData(l, l.loanId).subscribe()

  }
  Proceed(l: Loan, s: number) {
    l.loanStatus = s;
    this.modalService.dismissAll();
    this.service.updateData(l, l.loanId).subscribe()
  }

}