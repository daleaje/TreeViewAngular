import {Pipe, PipeTransform} from '@angular/core';

@Pipe(({
  name: 'highlightSearch'
})

export class HighlightSearchPipe implements PipeTransform{
  transform(value: any, args: any): any {
    if(!args) {return value;}
    var re = new RegExp(args,'gi'); // gi is for case insensitive and can use g if you want case sensitive
    return value.replace(re,"<mark>$&</mark>");
  }
}
