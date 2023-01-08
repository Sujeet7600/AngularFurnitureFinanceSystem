import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { User } from '../model/User/user';
import { EmployeeService } from '../shared/service/Employee/employee.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private router: Router, private service: EmployeeService) { }
  role: any;
  us:User;
  ngOnInit(): void {  
   
  }
  user = {
    userName: "",
    password: "",
    role:" "
  }
  login(u) {
   this.us=u;
    if (this.user.userName == "admin" && this.user.password == "admin") {
      sessionStorage.setItem('role', 'administration');
      sessionStorage.setItem('userName','admin');
      this.router.navigateByUrl("role/administration");
    } else {
      
      this.service.getValidateUser(this.us).subscribe(data => {         
        this.role=data.role;
        if (this.role != null) {
          alert(this.role);
          sessionStorage.setItem('role', this.role);
          sessionStorage.setItem('userName',this.us.userName);
          this.router.navigateByUrl("role/" + this.role);
        } 
        else {          
          alert("wrong creditionals");
        }
      })  
     }  
  }
 
}

