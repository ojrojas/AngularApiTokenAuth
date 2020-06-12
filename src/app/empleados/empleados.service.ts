import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { InjectableRutasService } from '../injectables/injectable-rutas.service';
import { Paginacion } from '../modelpaginacion/paginacion.interface';
import { EmpleadosViewModel } from './empleados.model';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class EmpleadosServices {

    constructor(private http: HttpClient, private baseUrls: InjectableRutasService) { }

    obtenerEmpleados(paginacion?: Paginacion) {
        const urlQuery = this.baseUrls.ObtenerEmpleados;
        console.log("urlQuery obtenerEmpleados", urlQuery);
        return this.http.post<Array<EmpleadosViewModel>>(
            urlQuery, paginacion)
            .pipe(
                map((response: EmpleadosViewModel[]) => {
                    return <Array<EmpleadosViewModel>>response.map(item => {
                        return new EmpleadosViewModel({
                            id: item.id,
                            typeIdentification: item.typeIdentification,
                            identificationNumber: item.identificationNumber,
                            name: item.name,
                            secondName: item.secondName,
                            surName: item.surName,
                            secondSurname: item.secondSurname,
                            subAreaId: item.subAreaId
                        });
                    });
                }));
    }

    obtenerEmpleado(area: EmpleadosViewModel) {
        const urlQuery = this.baseUrls.ObtenerEmpleado;
        console.log("urlQuery ObtenerEmpleado", urlQuery);
        return this.http.post<EmpleadosViewModel>(
            urlQuery, area)
            .pipe(
                map((response: EmpleadosViewModel) => {
                    console.log("empleado:", response);
                    return response;
                }));
    }


    crearEmpleado(area: EmpleadosViewModel) {
        const urlQuery = this.baseUrls.CrearEmpleado;
        console.log("urlQuery crear Empleado", urlQuery);
        return this.http.post<EmpleadosViewModel>(
            urlQuery, area)
            .pipe(
                map((response: EmpleadosViewModel) => {
                    return response;
                }));
    }

    editarEmpleado(area: EmpleadosViewModel) {
        const urlQuery = this.baseUrls.ActualizarEmpleado;
        console.log("urlQuery crear Editar", urlQuery);
        return this.http.post<EmpleadosViewModel>(
            urlQuery, area)
            .pipe(
                map((response: EmpleadosViewModel) => {
                    return response;
                }));
    }

    eliminarEmpleado(area: EmpleadosViewModel) {
        const urlQuery = this.baseUrls.EliminarEmpleado;
        console.log("urlQuery crear Eliminar", urlQuery);
        return this.http.post<EmpleadosViewModel>(
            urlQuery, area)
            .pipe(
                map((response: EmpleadosViewModel) => {
                    return response;
                }));
    }

    contarEmpleados() {
        const urlQuery = this.baseUrls.ContarEmpleados;
        console.log("urlQuery crear Contar", urlQuery);
        return this.http.get<EmpleadosViewModel>(
            urlQuery, {})
            .pipe(
                map((response: EmpleadosViewModel) => {
                    return response;
                }));
    }
}