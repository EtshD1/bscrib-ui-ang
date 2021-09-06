import { Injectable, Injector } from '@angular/core';
import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RequestInterceptorService implements HttpInterceptor {

  constructor(
    private _injector: Injector
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authService = this._injector.get(AuthService);
    const reqClone = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authService.getToken()}`
      }
    });

    return next.handle(reqClone);
  }
}
