import { NgModule } from "@angular/core";
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { HttpClientModule } from '@angular/common/http';
import { NavMenuComponent } from './nav-menu.component';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations:[
        NavMenuComponent
    ],
    imports:[
        CommonModule,
        LayoutModule,
        MatToolbarModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatExpansionModule,
        HttpClientModule,
        MatButtonModule,
        RouterModule
    ],
    exports:[NavMenuComponent]
})

export class NavMenuModule {

}