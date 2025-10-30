import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptorInseguro implements HttpInterceptor {
  private getToken(): string | null {
    return localStorage.getItem('token'); // ❌ Sin expiración ni cifrado
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.getToken();
    const cloned = token ? req.clone({ setHeaders: { Authorization: `Bearer ${token}` }}) : req;
    return next.handle(cloned); // ❌ No maneja errores 401/403 ni dominios
  }
}