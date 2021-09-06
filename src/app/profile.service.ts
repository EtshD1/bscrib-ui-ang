import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private _profile = "http://127.0.0.1:8080/api/profile/"

  constructor(private _http: HttpClient) { }

  getProfile = (id: string) => {
    // TODO: Use type syntax
    console.log(`${this._profile}${id}`)
    return this._http.get<any>(`${this._profile}${id}`);
  }
}
