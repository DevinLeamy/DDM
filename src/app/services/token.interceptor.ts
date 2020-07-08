import { Injectable } from '@angular/core'
import { HttpRequest, HttpEvent, HttpHandler, HttpInterceptor } from '@angular/common/http'
import { AuthenticationService } from './authentication'
import { Observable } from 'rxjs'

@Injectable( { providedIn: "root" })
export class TokenInterceptor implements HttpInterceptor {
  constructor(public authService : AuthenticationService) {
    console.log("Token Interceptor Initialized")
  }

  intercept(request : HttpRequest<any>, next: HttpHandler) : Observable<HttpEvent<any>> {
    //Injects token into request

    // console.log("Injecting token")
    request = request.clone({
      setHeaders: {
        authorization: "Bearer " + this.authService.getToken(),
      }
    })
    //Sends request to next handler
    return next.handle(request)
  }
}