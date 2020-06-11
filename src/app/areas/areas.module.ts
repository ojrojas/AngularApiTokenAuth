import { NgModule } from "@angular/core";
import {MatTableModule} from '@angular/material/table'; 
import { AreasComponent } from './areas.component';
import { AreasCrearComponent } from './areas-crear.component';
import { AreasEliminarComponent } from './areas-eliminar.component';
import { AreasEditarComponent } from './areas-editar.component';
import { CommonModule } from '@angular/common';
import { AreasRoutingModule } from './areas-routing.module';
import {MatButtonModule} from '@angular/material/button'; 
import {MatCardModule} from '@angular/material/card'; 
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { HttpClientModule } from '@angular/common/http';
import { NavMenuComponent } from '../nav-menu/nav-menu.component';
import { NavMenuModule } from '../nav-menu/nav-menu.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { LoginRoutingModule } from '../login/login-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
    declarations:[
        AreasComponent,
        AreasCrearComponent,
        AreasEliminarComponent,
        AreasEditarComponent,
    ],
    imports:[
        AreasRoutingModule,
        CommonModule,
        MatTableModule,
        MatButtonModule,
        MatCardModule,
        NavMenuModule,
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
    providers:[],
    exports:[]

})

export class AreasModule {}