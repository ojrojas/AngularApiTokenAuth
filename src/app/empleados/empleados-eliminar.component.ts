import { Component } from '@angular/core';
import { AreasViewModel } from '../areas/areas.model';
import { SubAreasViewModel } from '../subareas/subareas.model';
import { Validators, FormBuilder } from '@angular/forms';
import { EmpleadosServices } from './empleados.service';
import { AreasServices } from '../areas/areas.service';
import { SubAreasServices } from '../subareas/subareas.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { EmpleadosViewModel } from './empleados.model';

@Component({
    selector:'app-empleados-eliminar',
    templateUrl:'./empleados-eliminar.component.html'

})
export class EmpleadosEliminarComponent {
    

    areas: AreasViewModel[];
    subAreas: SubAreasViewModel[];
    Types: any = [
        {id: 1, name: 'Cedula de ciudadania'},
        {id: 2,name: 'Cedula de extranjeria'},
        {id: 3,name: 'Nit'},
        {id: 4,name: 'Otros'}
    ];
    typesId:any;

    formLogin = this.fb.group({
        id: ['', Validators.required],
        typeIdentification: ['', Validators.required],
        identificationNumber: ['', Validators.required],
        name: ['', Validators.required],
        secondName: ['', Validators.nullValidator],
        surName: ['', Validators.required],
        secondSurname: ['', Validators.nullValidator],
        subAreaId: ['', Validators.required],
        AreaId: ['', Validators.required]
    });

    constructor(
        private fb: FormBuilder,
        private empleadoService: EmpleadosServices,
        private areasServices: AreasServices,
        private subAreasServices: SubAreasServices,
        private snackBar: MatSnackBar,
        private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        let idempleado = this.route.snapshot.paramMap.get('id');
        this.typesId = this.Types;
        this.areasServices.obtenerAreas({ pagina: 0, tamanoPagina: 0 }).subscribe(
            (res: AreasViewModel[]) => {
                this.areas = res;
            },
            (error) => { console.log(error) },
            () => console.log("consulta finalizada"));

            this.empleadoService.obtenerEmpleado({"id": idempleado}).subscribe(
                (res:EmpleadosViewModel) => {
                    this.asignarValores(res);
                }
            );
    }

    asignarValores(empleado:EmpleadosViewModel){
        this.formLogin.controls["id"].setValue(empleado.id)
        this.formLogin.controls["typeIdentification"].setValue(empleado.typeIdentification)
        this.formLogin.controls["identificationNumber"].setValue(empleado.identificationNumber)
        this.formLogin.controls["name"].setValue(empleado.name)
        this.formLogin.controls["secondName"].setValue(empleado.secondName)
        this.formLogin.controls["surName"].setValue(empleado.surName)
        this.formLogin.controls["secondSurname"].setValue(empleado.secondSurname)
        this.formLogin.controls["subAreaId"].setValue(empleado.subAreaId)
    }

    onSubmit(empleado: EmpleadosViewModel) {
        return this.empleadoService.eliminarEmpleado(empleado).subscribe(
            (res) => {
                this.snackBar.open('empleado eliminado con exito', 'Eliminar');
                this.reset();
            },
            (error) => this.snackBar.open('Error al crear el empleado', 'Eliminar')
        )
    }

    reset() {
        for (let name in this.formLogin.controls) {
            this.formLogin.controls[name].setValue('');
            this.formLogin.controls[name].setErrors(null);
        }
    }

    onSelected(areaViewModel: AreasViewModel) {
        this.subAreasServices.obtenerAreasById(areaViewModel).subscribe(
            (res: SubAreasViewModel[]) => {
                this.subAreas = res;
            },
            (error) => {
                console.log(error.error);
            }, () => console.log("Consulta finalizada")
        )
    }
}