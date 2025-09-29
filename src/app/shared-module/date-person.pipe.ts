import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datePerson'
})
export class DatePersonPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
