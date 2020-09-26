import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {NewReleasesResponseInterface} from '../models/newReleasesResponse.interface';
import {map} from 'rxjs/operators';
import {ArtistsSearchResponseInterface} from '../models/artistsSearchResponse.interface';
import {ArtistSearchResponseInterface} from '../models/artistSearchResponse.interface';
import {TopTracksSearchResponseInterface} from '../models/topTracksSearchResponse.interface';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {


  constructor(
    private httpClient: HttpClient,
  ) {
  }

  private getHeaders() {

    return new HttpHeaders({
      'Authorization': `Bearer ${environment.accessToken}`,
    });
  }

  getNewReleases() {
    return this.httpClient.get<NewReleasesResponseInterface>(`${environment.spotifyEndpoint}/browse/new-releases`, {
      headers: this.getHeaders(),
    })
      .pipe(
        map((data: NewReleasesResponseInterface) => data.albums.items),
      );
  }

  searchItem(searchText: string) {
    return this.httpClient.get<ArtistsSearchResponseInterface>(`${environment.spotifyEndpoint}/search?q=${searchText}&type=artist`, {
      headers: this.getHeaders(),
    })
      .pipe(
        map((data: ArtistsSearchResponseInterface) => data.artists.items),
      );
  }

  searchArtist(id: string) {
    return this.httpClient.get<ArtistSearchResponseInterface>(`${environment.spotifyEndpoint}/artists/${id}`, {
      headers: this.getHeaders(),
    });
  }

  getTopTracks(id: string) {
    return this.httpClient.get<TopTracksSearchResponseInterface>(`${environment.spotifyEndpoint}/artists/${id}/top-tracks?market=ES`, {
      headers: this.getHeaders(),
    })
      .pipe(
        map(data => data.tracks),
      );
  }
}
