import { NgModule } from "@angular/core";
import { SubAreasComponent } from './subareas.component';
import { SubAreasCrearComponent } from './subareas-crear.component';
import { SubAreasEditarComponent } from './subareas-editar.component';
import { SubAreasEliminarComponent } from './subareas-eliminar.component';
import { CommonModule } from '@angular/common';
import { SubAreasRoutingModule } from './subareas-routing.module';
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
import { MatSelectModule } from '@angular/material/select';

@NgModule({
    declarations:[
        SubAreasComponent,
        SubAreasCrearComponent,
        SubAreasEditarComponent,
        SubAreasEliminarComponent
    ],
    imports:[
        CommonModule,
        SubAreasRoutingModule,
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
        MatSnackBarModule,
        MatSelectModule

    ],
    providers:[]

})

export class SubAreasModule {}