import {Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Pipe({
  name: 'embedSong',
})
export class EmbedSongPipe implements PipeTransform {

  constructor(
    private domSanitizer: DomSanitizer,
  ) {
  }

  transform(value: string) {
    const url = 'https://open.spotify.com/embed/track';
    return this.domSanitizer.bypassSecurityTrustResourceUrl(`${url}/${value}`);
  }

}
