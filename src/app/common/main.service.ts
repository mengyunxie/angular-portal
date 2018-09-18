import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MainService {

constructor() { }

}
@Injectable({
  providedIn: 'root'
})
/** 请求的拦截注入token */
export class AuthInterceptor implements HttpInterceptor {
  constructor(
  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    let request = null;
    console.log( 'coming' );
      request = req.clone({
        setHeaders: {
          'Content-Type': 'application/json',
          'Authorization': '123456',
        }
      });


    return next.handle(request).pipe(
      tap(data => {
          return  data;
        },
        (error) => {

        }
      )
    );
  }
}
