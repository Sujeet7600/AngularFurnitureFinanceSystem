import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Remark } from 'src/app/model/Remark/remark';

@Injectable({
  providedIn: 'root'
})
export class RemarkService {

  constructor(private httpClient:HttpClient) { }
  remark:Remark={
    id:0,
    discription:"",
    eid:0,
    toEid:0,
    status:true,
    date:null
  }
  urlgetremarklist:string="http://localhost:8080/api/allRemark";
  urlc:string="http://localhost:8080/api/remark";   

    saveData(r:Remark){
    if(r.id>0){
      this.httpClient.put(this.urlc+"/"+r.id,r);
    }else{
      this.httpClient.post(this.urlc,r);
    }
  }
  getData(): Observable<Remark[]>
  {
    return this.httpClient.get<Remark[]>(this.urlgetremarklist);
  }
  deleteData(id:number){
    this.httpClient.delete(this.urlc+"/"+id);
  }
  updateData(r: Remark): Observable<Remark> {
    return this.httpClient.put<Remark>(this.urlc+"/"+r.id,r);
  }
}
