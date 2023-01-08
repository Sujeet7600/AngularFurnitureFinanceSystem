import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  HaveAccess(currentrole: any, path: string) {
    return
    // throw new Error('Method not implemented.');
  }
  GetToken(): any {
    // throw new Error('Method not implemented.');
  }
  GetRolebyToken(arg0: any): any {
    // throw new Error('Method not implemented.');
  }

  constructor() { }
  isLoggedIn() {
    return localStorage.getItem("userName") != null;
  }
  haveRoleAccess(menuname: any) {
    const role = localStorage.getItem("role");
    if (role == "administration") {
      return  true;
    } else {
      if (role == "account") {
        return  true;
      } else if (role == "credit") {
        return  true;
      } else if (role == "operational") {
        return  true;
      } else if (role == "relational") {
        return  true;
      } else if (role == "customer") {
        return  true;
      }else{
        return false;
      }
    }
  } 
}