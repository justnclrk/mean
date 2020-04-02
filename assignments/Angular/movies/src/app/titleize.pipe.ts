import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe({
  name: 'titleize',
})
@Injectable()
export class TitleizePipe implements PipeTransform {
  static skipWords = ['of', 'the', 'in', 'a'];
  transform(value: string, args?: string[] | boolean) {
    if (typeof value !== 'string') {
      return value;
    }

    const skipWords = Array.isArray(args) ? args : TitleizePipe.skipWords;
    const processSkipWords = args !== false;

    return value.replace(/\w[^-\s]*/g, (word, index: number) => {
      if (processSkipWords && index && skipWords.includes(word.toLowerCase())) {
        return word.toLowerCase();
      }

      return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
    });
  }
}
