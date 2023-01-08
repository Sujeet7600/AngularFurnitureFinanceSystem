import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Employee } from 'src/app/model/Employee/employee';
import { EmployeeService } from 'src/app/shared/service/Employee/employee.service';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit {
  
  constructor(private modalService:NgbModal ,private service:EmployeeService) { }
  retrievedDoc:any;
  emplist!:Employee[];
  
  ngOnInit(): void {   
    this.service.getData().subscribe((data: Employee[])=> {
      this.retrievedDoc = data;
    });
  }
 
  

   deleteData(id:number){
  //     this.service.deleteData(id).subscribe();
  //     window.location.reload();
   }
  
   editData(emp:Employee){
  //      this.service.e = Object.assign({},emp);
   }  
   image: string;
  openModalI(targetModal, str: string) {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static'
    });
    this.image = str;

  }
}


