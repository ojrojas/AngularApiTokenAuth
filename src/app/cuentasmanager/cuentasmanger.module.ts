import { NgModule } from "@angular/core";
import { CuentasManagerRoutingModule } from './cuentasmanager-routing.module';

import { MatInputModule } from '@angular/material/input'
import {MatFormFieldModule} from '@angular/material/form-field'; 
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CuentasManagerService } from './cuentasmanager.service';
import { InjectableRutasService } from '../injectables/injectable-rutas.service';
import { CrearUsuarioComponent } from './crear-usuario.component';
import { EliminarUsuarioComponent } from './eliminar-usuario.component';

@NgModule({
    declarations:[
        CrearUsuarioComponent,
        EliminarUsuarioComponent
    ],
    imports:[
        CuentasManagerRoutingModule,
     
    ],
    providers:[
        CuentasManagerService,
        InjectableRutasService
    ]
    
})

export class CuentasManagerModule {}