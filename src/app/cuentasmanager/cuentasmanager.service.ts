import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { InjectableRutasService } from '../injectables/injectable-rutas.service';
import { AreasViewModel } from '../areas/areas.model';
import { map } from 'rxjs/operators';
import { Moment } from 'moment';
import { Router } from '@angular/router';


const headers = new HttpHeaders();
headers.append("content-type", "application/json");

@Injectable({
    providedIn: 'root'
})

export class CuentasManagerService {
    moment: Moment;
    constructor(private http: HttpClient,
        private baseUrls: InjectableRutasService,
        private router: Router) { }

   

}

