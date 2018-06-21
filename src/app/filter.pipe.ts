import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(sourceValue: any, field?: any, value?: any): any {
    
   if(!sourceValue)
   return [];
   if(!field || !value)
   return sourceValue;

   return sourceValue.filter(data =>data[field].toLowerCase().includes(value));
  }

}
