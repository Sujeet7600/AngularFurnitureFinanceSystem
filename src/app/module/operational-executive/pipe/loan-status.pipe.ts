import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'loanStatus'
})
export class LoanStatusPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    
    if(value==1){
      return "Pending For cibil";
    }else if(value==2){
      return "Waiting For Approval";
    }else if(value==3){
      return "Waiting For Doc";
    }else if(value==4){
      return "Waiting For Sanction";
    }else if(value==5){
      return "Waiting For Customer Approval";
    }else if(value==6){
      return "Waiting For Disbursment";
    }else if(value==7){
      return "Loan Open";
    }else if(value==8){
      return "Loan Closed";
    }else if(value==9){
      return "Rejected";
    }else{
      return "Invalid Status";
    }
  }
}
