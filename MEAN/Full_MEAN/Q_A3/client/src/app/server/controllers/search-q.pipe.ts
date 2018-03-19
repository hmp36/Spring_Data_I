import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class SearchQPipe implements PipeTransform {

  transform(items: any[], searchText: string ): any[] {
    if (!items) { return []; }
    if (!searchText) { return items; }
    searchText = searchText.toLowerCase();
    return items.filter( list => {
      console.log(list);
      return list.question.toLowerCase().includes(searchText);
    });
  }

}
