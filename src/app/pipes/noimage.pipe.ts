import {Pipe, PipeTransform} from '@angular/core';
import {Image} from '../models/newReleasesResponse.interface';

@Pipe({
  name: 'noimage',
})
export class NoimagePipe implements PipeTransform {

  transform(value: Array<Image>): string {
    return value[0] ? value[0].url : './assets/images/noimage.jpg';
  }

}
