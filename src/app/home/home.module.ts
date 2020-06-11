import { NgModule } from "@angular/core";
import { HomeComponent } from './home.component';
import { HomeRountingModule } from './home-routing.module';
import { CommonModule } from '@angular/common';
import { NavMenuModule } from '../nav-menu/nav-menu.module';

@NgModule({
    declarations:[HomeComponent],
    imports:[
        CommonModule,
        HomeRountingModule,
        NavMenuModule
    ],
    exports:[]
})

export class HomeModule {}