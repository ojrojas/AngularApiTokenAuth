import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { InjectableRutasService } from '../injectables/injectable-rutas.service';
import { Router } from '@angular/router';
import * as moment from "moment";
import { TokenViewmodel } from './token.model';
import { map } from 'rxjs/internal/operators/map';
import { LoginViewModel } from './login.model';

const headers = new HttpHeaders();
headers.append("Content-Type", "application/json");

@Injectable({
    providedIn: 'root'
})

export class LoginService {
   
    constructor(
        private http: HttpClient,
        private baseUrls: InjectableRutasService,
        private router: Router) { }

    login(login: LoginViewModel) {

        const urlQuery = this.baseUrls.ObtenerToken;
        console.log("urlQuery obtenerToken", urlQuery);
        return this.http.post<TokenViewmodel>(
            urlQuery, login,{headers})
            .pipe(
                map((response: TokenViewmodel) => {
                    return new TokenViewmodel({
                        token: response.token,
                        nickname: response.nickname,
                        expire_in: response.expire_in,
                    });
                }));
    }

    logout() {
        localStorage.removeItem('auth_token');
        localStorage.removeItem('name_user');
        localStorage.removeItem('expires_in');
        this.router.navigate(["/login"]);
    }

    estaLogueadoIn() {
        console.log(moment)
        return moment().isBefore(this.obtenerExpiracion());
    }

    obtenerExpiracion(): import("moment").MomentInput {
        const expiracion = localStorage.getItem("expires_in");
        const expiraEn = JSON.parse(expiracion);
        console.log(moment, (expiraEn));
        return moment(expiraEn);
    }

    setearTokens(token: TokenViewmodel) {
        const expire_ini = moment().add(token.expire_in, 'second');
        localStorage.setItem("auth_token", token.token);
        localStorage.setItem("name_user", token.nickname);
        localStorage.setItem("expires_in", JSON.stringify(expire_ini.valueOf()));
        this.router.navigate(['/home']);
    }

    obtenerToken(){
        return localStorage.getItem("auth_token");
    }
}