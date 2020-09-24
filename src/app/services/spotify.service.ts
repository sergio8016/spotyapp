import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {SpotifyResponse} from '../models/spotifyResponse';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {

  constructor(
    private httpClient: HttpClient,
  ) {
    console.log('Spotify service ready!!!');
  }

  getHeaders() {
    return new HttpHeaders({
      'Authorization': `Bearer ${environment.accessToken}`,
    });
  }

  getNewReleases() {
    return this.httpClient.get<SpotifyResponse>(`https://api.spotify.com/v1/browse/new-releases`, {
      headers: this.getHeaders(),
    });
  }
}
