import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  private _feedURL = "http://127.0.0.1:8080/api/feed"

  constructor(private _http: HttpClient) { }

  getFeed = () => {
    // TODO: Use type syntax
    return this._http.get<any>(this._feedURL);
  }
}
