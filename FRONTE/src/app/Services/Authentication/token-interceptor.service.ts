import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { LogService } from '../log.service'; 

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(
    private logService: LogService
  ) { }

  intercept(req: { clone: (arg0: { setHeaders: { Authorization: string; }; }) => any; },next: { handle: (arg0: any) => any; }) {
    const tokenizeReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.logService.getToken()}`
      }
    })
    return next.handle(tokenizeReq);
  }

}
