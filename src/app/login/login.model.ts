export class LoginViewModel 
{
    nombreusuario:string;
    contrasena:string;
    recuerdame:boolean;

    constructor(obj?:any){
        this.nombreusuario = obj && obj.nombreusuario || null;
        this.contrasena = obj && obj.contrasena || null;
        this.recuerdame = obj && obj.recuerdame || null;
    }
}