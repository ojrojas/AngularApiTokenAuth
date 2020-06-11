import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { AreasComponent } from './areas.component';
import { AreasEditarComponent } from './areas-editar.component';
import { AreasEliminarComponent } from './areas-eliminar.component';
import { AreasCrearComponent } from './areas-crear.component';

const routes:Routes=[
    {
        path:'',
        component: AreasComponent
    },
    {
        path:'editar/:id',
        component:AreasEditarComponent
    },
    {
        path:'eliminar/:id',
        component:AreasEliminarComponent
    },
    {
        path:'crear',
        component:AreasCrearComponent
    }
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class AreasRoutingModule {}