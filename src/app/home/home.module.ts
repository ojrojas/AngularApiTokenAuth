import { NgModule } from "@angular/core";
import { HomeComponent } from './home.component';
import { HomeRountingModule } from './home-routing.module';
import { CommonModule } from '@angular/common';
import { NavMenuModule } from '../nav-menu/nav-menu.module';
import { MatCardModule } from '@angular/material/card';

@NgModule({
    declarations:[HomeComponent],
    imports:[
        CommonModule,
        HomeRountingModule,
        NavMenuModule,
        MatCardModule
    ],
    exports:[]
})

export class HomeModule {}