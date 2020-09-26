import {Component, OnInit} from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';
import {take} from 'rxjs/operators';
import {Item} from '../../models/newReleasesResponse.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent implements OnInit {
  albums: Array<Item> = [];
  loading: boolean;

  constructor(
    private spotifyService: SpotifyService,
  ) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.spotifyService.getNewReleases()
      .pipe(
        take(1),
      )
      .subscribe((data: Array<Item>) => {
        this.albums = data;
        this.loading = false;
      }, error => {
        Swal.fire({
          icon: 'error',
          width: 300,
          title: 'Oops...',
          text: error.error.error.message,
        }).then(() => {
          this.loading = false;
        });
      });
  }

}
