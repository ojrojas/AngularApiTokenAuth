import { NgModule } from "@angular/core";
import { EmpleadosComponent } from './empleados.component';
import { EmpleadosCrearComponent } from './empleados-crear.component';
import { EmpleadosEditarComponent } from './empleados-editar.component';
import { EmpleadosEliminarComponent } from './empleados-eliminar.component';
import { CommonModule } from '@angular/common';
import { EmpleadosRoutingModule } from './empleados-routing.module';
import { NavMenuModule } from '../nav-menu/nav-menu.module';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { LoginRoutingModule } from '../login/login-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
    declarations:[
        EmpleadosComponent,
        EmpleadosCrearComponent,
        EmpleadosEditarComponent,
        EmpleadosEliminarComponent
    ],
    imports:[
        CommonModule,
        EmpleadosRoutingModule,
        NavMenuModule,
        MatTableModule,
        MatButtonModule,
        MatCardModule,
        MatPaginatorModule,
        MatFormFieldModule,
        MatInputModule,
        LoginRoutingModule,
        FormsModule,
        MatCheckboxModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatSnackBarModule
    ],
    providers:[]
})

export class EmpleadosModule {}