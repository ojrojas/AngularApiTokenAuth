import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { SubAreasComponent } from './subareas.component';
import { SubAreasCrearComponent } from './subareas-crear.component';
import { SubAreasEditarComponent } from './subareas-editar.component';
import { SubAreasEliminarComponent } from './subareas-eliminar.component';


const routes:Routes=[
    {
        path:'',
        component: SubAreasComponent 
    },
    {
        path:'editar/:id',
        component:SubAreasEditarComponent
    },
    {
        path:'eliminar/:id',
        component:SubAreasEliminarComponent
    },
    {
        path:'crear',
        component:SubAreasCrearComponent
    }
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class SubAreasRoutingModule {}