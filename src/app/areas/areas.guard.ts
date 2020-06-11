import { Injectable } from "@angular/core";
import { CanLoad, Route, UrlSegment, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../login/login.service';

@Injectable({
    providedIn:'root'
})

export class CanAreasGuard implements CanLoad {
    constructor(
        private login:LoginService,
        private router:Router){}


    canLoad(route: Route, segments: UrlSegment[]): boolean | Observable<boolean> | Promise<boolean> {
        if(this.login.estaLogueadoIn())
        return true;
        this.router.navigate(['/login']);
        return false;
    }
}