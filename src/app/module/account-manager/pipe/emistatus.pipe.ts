import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emistatus'
})
export class EmistatusPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {

    if (value == 1) {
      return "Unpaid";
    } else if (value == 2) {
      return "Paid";
    } 
  }
}