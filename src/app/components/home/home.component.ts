import {Component, OnInit} from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';
import {take} from 'rxjs/operators';
import {Item, SpotifyResponse} from '../../models/spotifyResponse';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent implements OnInit {
  albums: Array<Item> = [];

  constructor(
    private spotifyService: SpotifyService,
  ) {
  }

  ngOnInit(): void {
    this.spotifyService.getNewReleases()
      .pipe(
        take(1),
      )
      .subscribe((data: SpotifyResponse) => {
        console.log(data.albums.items);
        this.albums = data.albums.items;
      });
  }

}
