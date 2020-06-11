import { Component } from "@angular/core";
import { FormBuilder, Validators } from '@angular/forms';
import { LoginViewModel } from './login.model';
import { LoginService } from './login.service';
import { TokenViewmodel } from './token.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})

export class LoginComponent {
    formLogin = this.fb.group({
        nombreusuario: ['', Validators.required],
        contrasena: ['', Validators.required],
        recuerdame: [false, Validators.required],
    });

    constructor(
        private fb: FormBuilder,
        private loginService: LoginService,
        private _snackBar: MatSnackBar) { }

    onSubmit(login: LoginViewModel) {
        this.loginService.login(login).subscribe(
            (res: any) => {
                console.log(res);
                if (res.token != null) {
                    this.loginService.setearTokens(res);
                }
                else {
                    this._snackBar.open('Contraseña o usuario invalidos', 'Login');
                }
            },
            (error) => {
                this._snackBar.open('Contraseña o usuario requeridos', 'Login');
                console.log(error.error.errors)
            },
            () => console.log('request finalizado'))
    }
}