import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { CrearUsuarioComponent } from './crear-usuario.component';
import { EliminarUsuarioComponent } from './eliminar-usuario.component';

const routes:Routes=[
        {
            path:'eliminar',
            component:EliminarUsuarioComponent
        },
        {
            path:'crear',
            component:CrearUsuarioComponent
        }
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class CuentasManagerRoutingModule {}