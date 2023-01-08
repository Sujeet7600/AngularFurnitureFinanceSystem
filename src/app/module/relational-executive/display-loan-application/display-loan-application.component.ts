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

  constructor(private modalService: NgbModal, private service: LoanService) { }
  selectedpan: any;
  selectedaadhar: any; 
  selectedsanctionDocument: any; 
  selectedrentAgreement: any;
  selectedphoto: any;
  selectedsalarySlip: any;
  selectedsignature: any;
  selectedbankPassbookCopy: any;
  selectedcancelledCheck: any;
  selectedpdcCheck: any;
  selectedguarantorPhoto: any;


  retrievedDoc: any;
  emplist!: Loan[];
  
  ngOnInit(): void {
    this.service.getData().subscribe((data: Loan[]) => {
      this.retrievedDoc = data;
    });

  }

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
  l:Loan
  openModal(targetModal, loan: Loan) {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static'
    });
    this.l = loan;

  }
  // onSubmit(l: Loan) {
  //   this.modalService.dismissAll();   
  //   this.service.updateData(l, l.loanId).subscribe()

  // }
  Proceed(l: Loan, s: number) {
    l.loanStatus = s;
    this.modalService.dismissAll();
    this.service.updateData(l, l.loanId).subscribe()
  }
  onSubmit(l:number) {
    alert("welcome"+l)    

    // create object formdata
    const uploadDocument = new FormData();
        // store file formdata    
     uploadDocument.append("salarySlip", this.selectedsalarySlip);
     uploadDocument.append("sanctionDocument", this.selectedsanctionDocument);
     uploadDocument.append("signature", this.selectedsignature);
     uploadDocument.append("bankPassbookCopy", this.selectedbankPassbookCopy);
     uploadDocument.append("cancelledCheck", this.selectedcancelledCheck);
     uploadDocument.append("pdcCheck", this.selectedpdcCheck);    
     uploadDocument.append("panCopy", this.selectedpan);
     uploadDocument.append("aadharCopy", this.selectedaadhar);
     uploadDocument.append("rentAgreement", this.selectedrentAgreement);
     uploadDocument.append("photo", this.selectedphoto);
     uploadDocument.append("guarantorPhoto", this.selectedguarantorPhoto);
     this.service.updateDoc(uploadDocument,l).subscribe();
     console.log("Upload Method")
     this.modalService.dismissAll();
  }

  onselectedFile1(event: any) {
    this.selectedpan = event.target.files[0];
  }

  onselectedFile2(event: any) {
    this.selectedaadhar = event.target.files[0];
  }

  onselectedFile3(event: any) {
    this.selectedrentAgreement = event.target.files[0];
  }

  onselectedFile4(event: any) {
    this.selectedphoto = event.target.files[0];
  }
  onselectedFile5(event: any) {
    this.selectedsanctionDocument = event.target.files[0];
  }

  onselectedFile6(event: any) {
    this.selectedsalarySlip = event.target.files[0];
  }

  onselectedFile7(event: any) {
    this.selectedsignature = event.target.files[0];
  }

  onselectedFile8(event: any) {
    this.selectedbankPassbookCopy = event.target.files[0];
  }

  onselectedFile9(event: any) {
    this.selectedcancelledCheck = event.target.files[0];
  }

  onselectedFile10(event: any) {
    this.selectedpdcCheck = event.target.files[0];
  }

  onselectedFile11(event: any) {
    this.selectedguarantorPhoto = event.target.files[0];
  }
}