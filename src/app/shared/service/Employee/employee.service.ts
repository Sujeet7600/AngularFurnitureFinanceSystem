import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from 'src/app/model/Employee/employee';
import {  Observable } from 'rxjs';
import { User } from 'src/app/model/User/user';




@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
 
  r:string;
  constructor(private httpClient:HttpClient) { }
  emp:Employee={
    id:0,
    fName:"",
    lName:"",
    role:"",
    address:"",
    contactNo:0,
    photo:[],
    pan:[],
    aadhar:[],
    userName:"",
    password:"",
    email:""
  }
 
  

  urlgetemplist:string="http://localhost:8080/api/allEmployee";
  urlc:string="http://localhost:8080/api/employee";  
  urlM:string="http://localhost:8080/api/employeeM";  
  urlu:string="http://localhost:8080/api/user" 

    saveData(e: any): Observable<Employee>
    {
      alert("In service ");
   
      return this.httpClient.post<Employee>(this.urlc,e);  
   
  }

  
  getValidateUser(u:User):Observable<User> {     
    
    return this.httpClient.get<User>(this.urlu+"/"+u.userName+"/"+u.password);
     
  }
  getData(): Observable<Employee[]>
  {
    return this.httpClient.get<Employee[]>(this.urlgetemplist);
  }
  deleteData(id:number){
    this.httpClient.delete(this.urlc+"/"+id);
  }
  updateData(e: Employee): Observable<Employee> {
    return this.httpClient.put<Employee>(this.urlc+"/"+e.id,e);
  }
}