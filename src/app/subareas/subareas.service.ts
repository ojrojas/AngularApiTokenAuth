import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { InjectableRutasService } from '../injectables/injectable-rutas.service';
import { Paginacion } from '../modelpaginacion/paginacion.interface';
import { SubAreasViewModel } from './subareas.model';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class SubAreasServices {

    constructor(private http: HttpClient, private baseUrls: InjectableRutasService) { }

    obtenerAreas(paginacion?: Paginacion) {
        const urlQuery = this.baseUrls.ObtenerSubAreas;
        console.log("urlQuery ObtenerAreas", urlQuery);
        return this.http.post<Array<SubAreasViewModel>>(
            urlQuery,paginacion)
            .pipe(
                map((response: SubAreasViewModel[]) => {
                    return <Array<SubAreasViewModel>>response.map(item => {
                        return new SubAreasViewModel({
                            id: item.id,
                            code: item.code,
                            name: item.name,
                            areaId:item.areaId
                        });
                    });
                }));
    }

    obtenerArea(area:SubAreasViewModel) {
        const urlQuery = this.baseUrls.ObtenerSubArea;
        console.log("urlQuery ObtenerAreas", urlQuery);
        return this.http.post<SubAreasViewModel>(
            urlQuery,area)
            .pipe(
                map((response: SubAreasViewModel) => {
                    return response;
                }));
    }


    crearArea(area:SubAreasViewModel) {
        const urlQuery = this.baseUrls.CrearSubArea;
        console.log("urlQuery crear area", urlQuery);
        return this.http.post<SubAreasViewModel>(
            urlQuery,area )
            .pipe(
                map((response: SubAreasViewModel) => {
                    return response;
                }));
    }

    editarArea(area:SubAreasViewModel) {
        const urlQuery = this.baseUrls.ActualizarSubArea;
        console.log("urlQuery crear area", urlQuery);
        return this.http.post<SubAreasViewModel>(
            urlQuery,area )
            .pipe(
                map((response: SubAreasViewModel) => {
                    return response;
                }));
    }

    eliminarArea(area:SubAreasViewModel) {
        const urlQuery = this.baseUrls.EliminarSubArea;
        console.log("urlQuery crear area", urlQuery);
        return this.http.post<SubAreasViewModel>(
            urlQuery,area)
            .pipe(
                map((response: SubAreasViewModel) => {
                    return response;
                }));
    }

    contarArea() {
        const urlQuery = this.baseUrls.ContarSubAreas;
        console.log("urlQuery crear area", urlQuery);
        return this.http.get<SubAreasViewModel>(
            urlQuery,{})
            .pipe(
                map((response: SubAreasViewModel) => {
                    return response;
                }));
    }
}