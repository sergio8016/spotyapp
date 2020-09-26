import {Component} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {SpotifyService} from '../../services/spotify.service';
import {debounceTime, take} from 'rxjs/operators';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [],
})
export class SearchComponent {
  artists: Array<any> = [];
  loading: boolean;
  searchForm = this.formBuilder.group({
    search: [''],
  });

  constructor(
    private formBuilder: FormBuilder,
    private spotifyService: SpotifyService,
  ) {
  }

  onSearch(): void {
    this.loading = true;
    const searchText = this.searchForm.get('search').value;
    if (!searchText) {
      this.loading = false;
      this.artists = [];
      return;
    }
    this.spotifyService.searchItem(searchText)
      .pipe(
        take(1),
        debounceTime(500),
      )
      .subscribe(data => {
        this.artists = data;
        this.loading = false;
      }, error => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.error.message,
        });
      });
  }

}
