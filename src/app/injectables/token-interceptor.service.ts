import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from '../login/login.service';

@Injectable({
    providedIn:'root'
})

export class TokenInterceptorService implements HttpInterceptor{

    constructor(private loginService:LoginService){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const tokenRequest =   req.clone({
            setHeaders:{
                Authorization :`Bearer ${this.loginService.obtenerToken()}`,
                'Content-Type':'application/json'
            }
        })

        return next.handle(tokenRequest);
    }

}