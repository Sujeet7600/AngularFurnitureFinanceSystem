import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Loan } from 'src/app/model/Loan/loan';

@Injectable({
  providedIn: 'root'
})
export class LoanService {
  constructor(private httpClient:HttpClient) { }
  loan:Loan={
    loanId:0,   
    loanStatus: 0,
    requiredLoanAmount:0,
    quatationAmount:0,
    quotaionDoc:[],
    loanAmount:0,
    loanAmountToBank:0,
    processingCharge:0,
    insurance:0,
    emi:0,
    rateOfInterest:0,
    tenure:0,
    generatedBy:0,
    generatedDate:null,
    sanctionDocument:[],
    sanctionDocumentDate:null,
    salarySlip:[],
    signature:[],
    bankPassbookCopy:[],
    cancelledCheck:[],
    pdcCheck:[],	
    guarantorName:"",
    guarantorMobileNo:0,
    guarantorAadharNo:0,
    guarantorOccupation:"",
    guarantorPhoto:[],
    customer:{        
        customerId:0,
        customerName:"",
        customerEmailId:"",
        customerContactNumber:0,
        customerLocalAddress:"",
        customerLocalPincode:0,
        customerPermanantAddress:"",
        customerPermanantPincode:0,	
        cmRemark:"",
        status:"",		
        panNo:"",
        aadharNo:0,
        cibilScore:0,
        note:"",
        panCopy:[],
        aadharCopy:[],
        rentAgreement:[],
        photo:[]
      }
    }
  
  urlgetloanlist:string="http://localhost:8080/api/allLoan";
  urlc:string="http://localhost:8080/api/loan";   
  urlM:string="http://localhost:8080/api/loanM"; 
  urlemail:string="http://localhost:8080/api/sendAttachment"; 
  
  
    saveData(l:any){
    
     return this.httpClient.post(this.urlc,l);
    
  }
    sendMail(email:any){
    
     return this.httpClient.post(this.urlemail,email);
    
  }
  getData(): Observable<Loan[]>
  {
    return this.httpClient.get<Loan[]>(this.urlgetloanlist);
  }
  getLoan(id:number): Observable<Loan>
  {
    return this.httpClient.get<Loan>(this.urlc+"/"+id);
  }
  deleteData(id:number){
    this.httpClient.delete(this.urlc+"/"+id);
  }
 
  updateData(l: any,id:number): Observable<Loan> {
    
    console.log(id);
    return this.httpClient.put<Loan>(this.urlc+"/"+id,l);
  }
  updateDoc(l:any,id:number): Observable<Loan> {
    
    console.log(id);
    return this.httpClient.put<Loan>(this.urlM+"/"+id,l);
  }
}