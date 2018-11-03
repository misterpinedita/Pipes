import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], prop: string, valueProperty: any): any {
    const result: Array<any> = new Array<any>();

    for (const item of value) {
      if(item[prop] === valueProperty){
        result.push(item);
      }
    }
    return result;
  }

}
