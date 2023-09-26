import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: string): string {
    switch(value){
      case 'Front-end': return 'code';
      case 'Back-End': return 'computer';
    }
    return 'code';
  }

}
