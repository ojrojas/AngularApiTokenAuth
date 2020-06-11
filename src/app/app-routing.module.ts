import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CanHomeGuard } from './home/home-guard.guard';
import { CanEmpleadosGuard } from './empleados/empleados.guard';
import { CanAreasGuard } from './areas/areas.guard';
import { CanSubAreasGuard } from './subareas/subareas.guard';
import { CanCuentasManagerGuard } from './cuentasmanager/cuentasmanager.guard';


const routes: Routes = [
  { 
    path: 'login', 
    loadChildren:()=> import('./login/login.module').then(m=>m.LoginModule)  
  },
  {
    path:'home',
    loadChildren :() => import('./home/home.module').then(m => m.HomeModule),
    canLoad:[CanHomeGuard]
  },
  {
    path:'empleados',
    loadChildren :() => import('./empleados/empleados.module').then(m => m.EmpleadosModule),
    canLoad:[CanEmpleadosGuard]
  },
  {
    path:'areas',
    loadChildren :() => import('./areas/areas.module').then(m => m.AreasModule),
    canLoad:[CanAreasGuard]
  },
  {
    path:'subareas',
    loadChildren :() => import('./subareas/subareas.module').then(m => m.SubAreasModule),
    canLoad:[CanSubAreasGuard]
  },
  {
    path:'manager',
    loadChildren :() => import('./cuentasmanager/cuentasmanger.module').then(m => m.CuentasManagerModule),
    canLoad:[CanCuentasManagerGuard]
  },
  {
    path:'**',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[CanAreasGuard]
})
export class AppRoutingModule { }
