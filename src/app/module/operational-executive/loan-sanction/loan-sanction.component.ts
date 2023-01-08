import { Component, OnInit } from '@angular/core';
import { Loan } from 'src/app/model/Loan/loan';
import { LoanService } from 'src/app/shared/service/Loan/loan.service';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { Email } from 'src/app/model/email/email';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


pdfMake.vfs = pdfFonts.pdfMake.vfs;


@Component({
  selector: 'app-loan-sanction',
  templateUrl: './loan-sanction.component.html',
  styleUrls: ['./loan-sanction.component.css']
})
export class LoanSanctionComponent implements OnInit {

  constructor(private modalService:NgbModal,private service: LoanService) { }

  sanction: Loan={
    loanId: 0,
    customer:{
      customerId: 0,
      customerName: '',
      customerEmailId: '',
      customerContactNumber: 0,
      customerLocalAddress: '',
      customerLocalPincode: 0,
      customerPermanantAddress: '',
      customerPermanantPincode: 0,
      cmRemark: '',
      status: '',
      panNo: '',
      aadharNo: 0,
      cibilScore: 0,
      note: '',
      panCopy: [],
      aadharCopy: [],
      rentAgreement: [],
      photo: []
    },
    loanStatus: 0,
    requiredLoanAmount: 0,
    quatationAmount: 0,
    quotaionDoc: [],
    insurance: 0,
    loanAmountToBank: 0,
    loanAmount: 0,
    processingCharge: 0,
    emi: 0,
    rateOfInterest: 0,
    tenure: 0,
    generatedBy: 0,
    generatedDate: undefined,
    sanctionDocument: [],
    sanctionDocumentDate: undefined,
    salarySlip: [],
    signature: [],
    bankPassbookCopy: [],
    cancelledCheck: [],
    pdcCheck: [],
    guarantorName: '',
    guarantorMobileNo: 0,
    guarantorAadharNo: 0,
    guarantorOccupation: '',
    guarantorPhoto: []
  };
  loanId: number;
  emailData:Email={
    fromEmail: '',
    toEmail: '',
    subject: '',
    textBody: ''
  };
  findLoan() {
    this.service.getLoan(this.loanId).subscribe(l =>{ this.sanction = l;
      this.emailData.toEmail=l.customer.customerEmailId;
    })
  }
  selectedsanctionletter: any;
 
  sanctionMail(l:Loan,e:Email) {
    e.toEmail=l.customer.customerEmailId;    
    const email = JSON.stringify(e);
    console.log(e)
    const uploadDocument = new FormData();
        // store file formdata       
    uploadDocument.append("attachment", this.selectedsanctionletter);
    uploadDocument.append("email", email);
    this.service.sendMail(uploadDocument).subscribe();   
    this.modalService.dismissAll();
  }
 
  openModal(targetModal) {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static'
    });    
   
  }
  onselectedFile1(event: any) {
    this.selectedsanctionletter = event.target.files[0];
  }
  ngOnInit(): void {

  }

  generatePDF(action = 'open') {
    let docDefinition = {
      watermark: { text: 'IntrfinCom', color: 'black', opacity: 0.2, bold: false, italics: false },
      content: [
        {
          text: 'Sanction Letter',
          fontSize: 16,
          alignment: 'center',
          color: '#047886'
        },
        {
          text: 'InteriorFinCom',
          fontSize: 20,
          bold: true,
          alignment: 'center',
          decoration: 'underline',
          color: 'skyblue'
        },
        {
          text: 'Customer Details',
          style: 'sectionHeader'
        },
        {
          columns: [
            [{
              text: this.sanction.customer.customerName,
              bold: true
            },
            { text: this.sanction.customer.customerLocalAddress },
            { text: this.sanction.customer.customerEmailId },
            { text: this.sanction.customer.customerContactNumber }
            ],
            [
              {
                text: `Date: ${new Date().toLocaleString()}`,
                alignment: 'right'
              },
              {
                // text: `Loan No : ${((Math.random() * 10000).toFixed(0))}`,
                text: `Loan No : ${(this.sanction.loanId)}`,
                alignment: 'right'
              }
            ]
          ]
        },
        {
          text: ' Loan Details',
          style: 'sectionHeader'
        },
        {
          text: 'Dear Customer,\n' + "              '" + this.sanction.customer.customerName + "' Your loan is aproved Amount is " + this.sanction.loanAmount + '\n' +
            'At interest rate is ' + this.sanction.rateOfInterest + '%' + ' Please sign Contract for further process. Thank You !\n\n '
            + 'Regards,\n' + 'InteriorFinCom\n\n\n\n'
        },
        {
          text: 'Additional Details',
          style: 'sectionHeader'
        },
        {
          text: this.sanction.customer.cmRemark + '\n\n\n',
          margin: [0, 0, 0, 15]
        },
        {
          columns: [
            [{ qr: `${this.sanction.customer.customerName}`, fit: '50' }],
            [{ text: 'Signature\n\n', alignment: 'right', italics: true }],
          ]
        },
        {
          text: 'Terms and Conditions',
          style: 'sectionHeader'
        },
        {
          ul: [
            'Please sign Contract in max 10 days.',
            'Interest rate of the Loan will be subject to the Company terms and conditions.',
            'This is system generated Sanction letter.',
          ],
        }
      ],
      styles: {
        sectionHeader: {
          bold: true,
          decoration: 'underline',
          fontSize: 14,
          margin: [0, 15, 0, 15]
        }
      }
    };
    if (action === 'download') {
      pdfMake.createPdf(docDefinition).download();
    } else if (action === 'print') {
      pdfMake.createPdf(docDefinition).print();
    } else {
    pdfMake.createPdf(docDefinition).open();
      
    }
  }
}