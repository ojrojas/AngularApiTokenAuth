import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { InjectableRutasService } from '../injectables/injectable-rutas.service';
import { Paginacion } from '../modelpaginacion/paginacion.interface';
import { AreasViewModel } from './areas.model';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class AreasServices {

    constructor(private http: HttpClient, private baseUrls: InjectableRutasService) { }

    obtenerAreas(paginacion?: Paginacion) {
        const urlQuery = this.baseUrls.ObtenerAreas;
        console.log("urlQuery ObtenerAreas", urlQuery);
        return this.http.post<Array<AreasViewModel>>(
            urlQuery,paginacion)
            .pipe(
                map((response: AreasViewModel[]) => {
                    console.log(response);
                    return <Array<AreasViewModel>>response.map(item => {
                        return new AreasViewModel({
                            id: item.id,
                            code: item.code,
                            name: item.name,
                        });
                    });
                }));
    }

    obtenerArea(area:AreasViewModel) {
        const urlQuery = this.baseUrls.ObtenerArea;
        console.log("urlQuery ObtenerAreas", urlQuery);
        return this.http.post<AreasViewModel>(
            urlQuery,area)
            .pipe(
                map((response: AreasViewModel) => {
                    return response;
                }));
    }


    crearArea(area:AreasViewModel) {
        const urlQuery = this.baseUrls.CrearArea;
        console.log("urlQuery crear area", urlQuery);
        return this.http.post<AreasViewModel>(
            urlQuery,area )
            .pipe(
                map((response: AreasViewModel) => {
                    return response;
                }));
    }

    editarArea(area:AreasViewModel) {
        const urlQuery = this.baseUrls.ActualizarArea;
        console.log("urlQuery crear area", urlQuery);
        return this.http.post<AreasViewModel>(
            urlQuery,area )
            .pipe(
                map((response: AreasViewModel) => {
                    return response;
                }));
    }

    eliminarArea(area:AreasViewModel) {
        const urlQuery = this.baseUrls.EliminarArea;
        console.log("urlQuery crear area", urlQuery);
        return this.http.post<AreasViewModel>(
            urlQuery,area)
            .pipe(
                map((response: AreasViewModel) => {
                    return response;
                }));
    }

    contarArea() {
        const urlQuery = this.baseUrls.ContarAreas;
        console.log("urlQuery crear area", urlQuery);
        return this.http.get<AreasViewModel>(
            urlQuery,{})
            .pipe(
                map((response: AreasViewModel) => {
                    return response;
                }));
    }
}