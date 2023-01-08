import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/model/Customer/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient:HttpClient) { }

  
  emp:Customer={
    customerId: 0,
    customerName:"",
    customerEmailId:"",
    customerContactNumber:null,
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

  urlgetcustlist:string="http://localhost:8080/api/allCustomer";
  urlc:string="http://localhost:8080/api/customer";   
  urlM:string="http://localhost:8080/api/customerM";   

    saveData(e:Customer){
    if(e.customerId>0){
      this.httpClient.put(this.urlc+"/"+e.customerId,e);
    }else{
      this.httpClient.post(this.urlc,e);
    }
  }
  getData(): Observable<Customer[]>
  {
    return this.httpClient.get<Customer[]>(this.urlgetcustlist);
  }
  deleteData(id:number){
    this.httpClient.delete(this.urlc+"/"+id);
  }
  updateData(e: Customer): Observable<Customer> {
    return this.httpClient.put<Customer>(this.urlc+"/"+e.customerId,e);
  }
}