import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { EmpleadosComponent } from './empleados.component';
import { EmpleadosEditarComponent } from './empleados-editar.component';
import { EmpleadosEliminarComponent } from './empleados-eliminar.component';
import { EmpleadosCrearComponent } from './empleados-crear.component';

const routes:Routes=[
    {
        path:'',
        component: EmpleadosComponent 
    },
    {
        path:'editar/:id',
        component:EmpleadosEditarComponent
    },
    {
        path:'eliminar/:id',
        component:EmpleadosEliminarComponent
    },
    {
        path:'crear',
        component:EmpleadosCrearComponent
    }
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class EmpleadosRoutingModule {}