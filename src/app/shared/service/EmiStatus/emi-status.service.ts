import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmiStatus } from 'src/app/model/EmiStatus/emi-status';

@Injectable({
  providedIn: 'root'
})
export class EmiStatusService {
  constructor(private httpClient:HttpClient) { }
  emistatus:EmiStatus={
    emiId:0,
    loanId:0,
    installmentNo:0,
    installmentAmount:0.0,
    installmentDate:null,
    installmentStatus:0
  }

  urlgetemistatuslist:string="http://localhost:8080/api/allEmiStatus";
  urlc:string="http://localhost:8080/api/emiStatus";   

    saveData(e:EmiStatus){
    {
    return   this.httpClient.post(this.urlc,e);
    }
  }
  getData(): Observable<EmiStatus[]>
  {
    return this.httpClient.get<EmiStatus[]>(this.urlgetemistatuslist);
  }
  getLoanEmiData(id:number): Observable<EmiStatus[]>
  {
    return this.httpClient.get<EmiStatus[]>(this.urlgetemistatuslist+"/"+id);
  }
  deleteData(id:number){
    this.httpClient.delete(this.urlc+"/"+id);
  }
  updateData(e: EmiStatus): Observable<EmiStatus> {
    return this.httpClient.put<EmiStatus>(this.urlc+"/"+e.emiId,e);
  }
}