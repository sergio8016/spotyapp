import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {SpotifyService} from '../../services/spotify.service';
import {debounceTime, distinctUntilChanged, take, tap} from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [],
})
export class SearchComponent {
  artists: Array<any> = [];
  searchForm = this.formBuilder.group({
    search: [''],
  });

  constructor(
    private formBuilder: FormBuilder,
    private spotifyService: SpotifyService,
  ) {
  }

  onSearch(): void {
    const searchText = this.searchForm.get('search').value;
    this.spotifyService.searchItem(searchText)
      .pipe(
        take(1),
        debounceTime(500),
        tap(console.log),
      )
      .subscribe(data => this.artists = data);
  }

}
