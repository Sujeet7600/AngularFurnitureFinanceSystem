import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Loan } from 'src/app/model/Loan/loan';
import { LoanService } from 'src/app/shared/service/Loan/loan.service';

@Component({
  selector: 'app-display-loan-application',
  templateUrl: './display-loan-application.component.html',
  styleUrls: ['./display-loan-application.component.css']
})
export class DisplayLoanApplicationComponent implements OnInit {

  constructor( private modalService: NgbModal ,private service:LoanService) { }


  retrievedDoc:any;
  emplist!:Loan[];
 
 
  
  ngOnInit(): void {   
    this.service.getData().subscribe((data: Loan[])=> {
      this.retrievedDoc = data;
    });
   
  }
      
   deleteData(id:number){
  //     this.service.deleteData(id).subscribe();
  //     window.location.reload();
   }
  
   editData(l:Loan){
  //      this.service.e = Object.assign({},emp);
   }  
   Edit(){

   }
   image:string;
   openModalI(targetModal,str:string) {
    this.modalService.open(targetModal, {
     centered: true,
     backdrop: 'static'
    });
   this.image=str;
   
  }
  // principal = 0;
  // rate = 0;
  // time = 0;
  // emi;
  // repayAmt;
  // emi_calculator(p, r, t) {
  //   let emi;
  //   r = r / (12 * 100); // one month interest
  //   t = t * 12; // one month period
  //   emi = (p * r * Math.pow(1 + r, t)) / (Math.pow(1 + r, t) - 1);

  //   this.emi = (emi + 0.000414);
  //   this.repayAmt = emi * t
  //   console.log(this.emi)
  // }
 
  repayAmt; 
  l:Loan;
    openModal(targetModal,loan:Loan) {
     this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static'
     });
       this.l=loan;      
        this.l.emi =((this.l.loanAmount * (this.l.rateOfInterest / (12 * 100)) * Math.pow(1 + (this.l.rateOfInterest / (12 * 100)), (this.l.tenure * 12))) / (Math.pow(1 + (this.l.rateOfInterest / (12 * 100)), (this.l.tenure * 12)) - 1) + 0.000414);
        this.repayAmt=this.l.emi*(this.l.tenure * 12)
        console.log(this.l.emi)
    
   }
   
    onSubmit(l:Loan) {
     this.modalService.dismissAll();    
     this.service.updateData(l,l.loanId).subscribe()
     
    }
    Proceed(l:Loan,s:number){
        l.loanStatus=s;
        this.modalService.dismissAll();    
        
        this.service.updateData(l,l.loanId).subscribe()
    }
   
     
}