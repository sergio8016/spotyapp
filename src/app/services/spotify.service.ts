import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {NewReleasesResponseInterface} from '../models/newReleasesResponse.interface';
import {map} from 'rxjs/operators';
import {ArtistsSearchResponseInterface} from '../models/artistsSearchResponse.interface';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {

  constructor(
    private httpClient: HttpClient,
  ) {
  }

  private static getHeaders() {
    return new HttpHeaders({
      'Authorization': `Bearer ${environment.accessToken}`,
    });
  }

  getNewReleases() {
    return this.httpClient.get<NewReleasesResponseInterface>(`${environment.spotifyEndpoint}/browse/new-releases`, {
      headers: SpotifyService.getHeaders(),
    })
      .pipe(
        map((data: NewReleasesResponseInterface) => data.albums.items),
      );
  }

  searchItem(searchText: string) {
    return this.httpClient.get<ArtistsSearchResponseInterface>(`${environment.spotifyEndpoint}/search?q=${searchText}&type=artist`, {
      headers: SpotifyService.getHeaders(),
    })
      .pipe(
        map((data: ArtistsSearchResponseInterface) => data.artists.items),
      );
  }
}
