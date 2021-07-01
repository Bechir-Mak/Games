import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";



@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next : HttpHandler
  ): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders : {
        'x-rapidapi-key': 'ee649752ffmsh7f6a1ff86ee8e69p180937jsn86e5c844c325',
        'x-rapidapi-host':  'rawg-video-games-database.p.rapidapi.com'
      },
      setParams : {
          key: '569df745dede4ad5a8cd75018635ace6',
      }
    });
    return next.handle(req);
  }
}
