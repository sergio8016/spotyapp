import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SpotifyService} from '../../services/spotify.service';
import {take, tap} from 'rxjs/operators';
import {ArtistSearchResponseInterface} from '../../models/artistSearchResponse.interface';
import {Track} from '../../models/topTracksSearchResponse.interface';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: [],
})
export class ArtistComponent implements OnInit {
  artist: ArtistSearchResponseInterface;
  topTracks: Array<Track> = [];
  displayedColumns: string[] = ['image', 'album', 'name', 'preview'];

  constructor(
    private activatedRoute: ActivatedRoute,
    private spotifyService: SpotifyService,
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.spotifyService.searchArtist(data.id)
        .pipe(
          take(1),
        )
        .subscribe((data: ArtistSearchResponseInterface) => {
          this.artist = data;
        });

      this.spotifyService.getTopTracks(data.id)
        .pipe(
          take(1),
        )
        .subscribe(data => this.topTracks = data);
    });
  }

}
