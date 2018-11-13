import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestInterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    let newHeader: HttpHeaders = req.headers;
    newHeader = newHeader.set('Content-Type', 'application/json');

    if (token) { newHeader = newHeader.set('x-access-token', token);}
    const newReq = req.clone({headers: newHeader});
    return next.handle(newReq);
  }

  constructor() { }
}
