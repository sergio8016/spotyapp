import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  items: Array<any> = [];

  @Input() set itemsInput(data) {
    if (!data.length) {
      return;
    }
    this.items = data;
  }

  constructor() {
  }

}
