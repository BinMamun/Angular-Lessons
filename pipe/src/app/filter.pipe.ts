import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchText: string): any {
    if (!searchText) return value;
    console.log(value, searchText.toUpperCase());
    return value.filter((x: any) => x.name.startsWith(searchText.toUpperCase()));
  }
}
