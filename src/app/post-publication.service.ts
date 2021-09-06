import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostPublicationService {

  private _check = "http://127.0.0.1:8080/api/check-url";
  private _add = "http://127.0.0.1:8080/api/publication";

  constructor(private _http: HttpClient) { }

  checkUrl = (url: string) => {
    // TODO: Use type syntax
    return this._http.post<any>(this._check, { url });
  }

  addPublication = (publication: { url: string, body: string, title: string }) => {
    // TODO: Use type syntax
    return this._http.post<any>(this._add, {
      url: publication.url,
      context: publication.body,
      title: publication.title
    });
  }
}
