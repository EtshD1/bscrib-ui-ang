import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _registerURL = 'http://127.0.0.1:8080/signup'
  private _loginURL = 'http://127.0.0.1:8080/login'

  constructor(private http: HttpClient, private _router: Router) { }

  registerUser = (newUser: { username: string, password: string }) => {
    return this.http.post<any>(this._registerURL, newUser);
  }

  loginUser = (newUser: { username: string, password: string }) => {
    return this.http.post<any>(this._loginURL, newUser);
  }

  isAuthed = () => {
    return !!localStorage.getItem("token");
  }

  getToken = () => {
    return localStorage.getItem("token");
  }

  logout = () => {
    localStorage.removeItem("token");
    return this._router.navigate(["/events"]);
  }
}
