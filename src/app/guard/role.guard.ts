import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { MasterService } from '../shared/service/longin/master.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate, CanActivateChild, CanDeactivate<unknown>, CanLoad {
  constructor(private service:MasterService, private route:Router){}
  currentrole: any;
  respdata: any;
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.service.haveRoleAccess(route.url[0].path)){
        return true;
      }else{
        alert("you don't have access");
      // this.route.navigate(["login"]);
        return false;
      }

      if (this.service.isLoggedIn()) {
        this.currentrole = this.service.GetRolebyToken(this.service.GetToken());
        // this.service.HaveAccess(this.currentrole, route.url[0].path).subscribe(result => {
        //   this.respdata = result;
        //   if (this.respdata.result == 'pass') {
        //     return true;
        //   } else {
        //     this.route.navigate(['']);
        //     alert('unauthorized access');
        //     return false;
        //   }
        // });
  
        return true;
      } else {
        this.route.navigate(['login']);
        return false;
      }
    


  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
}
