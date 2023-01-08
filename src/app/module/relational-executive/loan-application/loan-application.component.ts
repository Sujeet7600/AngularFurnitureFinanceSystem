import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoanService } from 'src/app/shared/service/Loan/loan.service';

@Component({
  selector: 'app-loan-application',
  templateUrl: './loan-application.component.html',
  styleUrls: ['./loan-application.component.css']
})
export class LoanApplicationComponent implements OnInit {
  constructor(private formbuilder: FormBuilder, private service: LoanService) { }

  selectedpan: any;
  selectedaadhar: any;
  selectedrentAgreement: any;
  selectedphoto: any;
  selectedsalarySlip: any;
  selectedquotationDoc: any;
  selectedbankPassbookCopy: any;

  reader = new FileReader();
  registerForm: FormGroup;
  ngOnInit(): void {
    this.registerForm = this.formbuilder.group({
      loanId: 0,
      loanStatus: 1,
      quatationAmount: 0,
      quotaionDoc: [],
      requiredLoanAmount: 0,
      generatedBy: 0,
      generatedDate: null,
      salarySlip: [],
      bankPassbookCopy: [],
      customer: this.formbuilder.group({
        customerId: 0,
        customerName: "",
        customerEmailId: "",
        customerContactNumber: 0,
        customerLocalAddress: "",
        customerLocalPincode: 0,
        customerPermanantAddress: "",
        customerPermanantPincode: 0,
        cmRemark: "",
        status: "",
        panNo: "",
        aadharNo: 0,
        note: "",
        panCopy: [],
        aadharCopy: [],
        rentAgreement: [],
        photo: []
      })
    })
  }

  createaccount() {
    alert("welcome")

    const LoanData = JSON.stringify(this.registerForm.value);
    // create object formdata
    const uploadDocument = new FormData();
        // store file formdata
    uploadDocument.append("salarySlip", this.selectedsalarySlip);
    uploadDocument.append("quotationDoc", this.selectedquotationDoc);
    uploadDocument.append("bankPassbookCopy", this.selectedbankPassbookCopy);
    uploadDocument.append("panCopy", this.selectedpan);
    uploadDocument.append("aadharCopy", this.selectedaadhar);
    uploadDocument.append("rentAgreement", this.selectedrentAgreement);
    uploadDocument.append("photo", this.selectedphoto);
    uploadDocument.append("loanData", LoanData);
    this.service.saveData(uploadDocument).subscribe();
    console.log("Upload Method")
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

  onselectedFile6(event: any) {
    this.selectedsalarySlip = event.target.files[0];
  }

  onselectedFile7(event: any) {
    this.selectedquotationDoc = event.target.files[0];
  }

  onselectedFile8(event: any) {
    this.selectedbankPassbookCopy = event.target.files[0];
  }


}