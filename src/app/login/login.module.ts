import { NgModule } from "@angular/core";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LoginService } from './login.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {MatCheckboxModule} from '@angular/material/checkbox'; 
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
    declarations:[
        LoginComponent
    ],
    imports:[
        CommonModule,
        MatFormFieldModule,
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        MatCardModule,
        LoginRoutingModule,
        FormsModule,
        MatCheckboxModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatSnackBarModule
    ],
    exports:[],
    providers:[LoginService]
})

export class LoginModule {}