import { Injectable, Inject } from '@angular/core';
import {
  HttpClient,
  HttpRequest,
  HttpHeaders
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SearchResult } from './search-result.model';

export const YOUTUBE_API_KEY =
  'AIzaSyA62GR7rWXHi--knIKfikbV7xE5XGdEN3E';
export const YOUTUBE_API_URL =
  'https://www.googleapis.com/youtube/v3/search';

@Injectable()
export class YouTubeSearchService {
  constructor(
    private http: HttpClient,
    @Inject(YOUTUBE_API_KEY) private apiKey: string,
    @Inject(YOUTUBE_API_URL) private apiUrl: string
  ) {}

  search(query: string): Observable<SearchResult[]> {
    const params: string = [
      `key=${this.apiKey}`,
      `q=${query}`,
      `part=snippet`,
      `type=video`,
      `maxResults=10`
    ].join('&');
    const queryUrl = `${this.apiUrl}?${params}`;
    console.log(queryUrl);
    return this.http.get(queryUrl).pipe(map(response => {
      return <any>response['items'].map(item => {

        return new SearchResult({
          id: item.id.videoId,
          title: item.snippet.title,
          description: item.snippet.description,
          thumbnailUrl: item.snippet.thumbnails.high.url
        });
      });
    }));
  }
}