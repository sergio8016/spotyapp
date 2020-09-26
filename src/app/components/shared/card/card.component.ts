import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  items: Array<any> = [];

  @Input() set itemsInput(data) {
    if (!data.length) {
      this.items = [];
      return;
    }
    this.items = data;
  }

  constructor(
    private router: Router,
  ) {
  }

  goToArtistPage(item) {
    if (item.type === 'artist') this.router.navigate(['/artist', item.id]);
  }

}
