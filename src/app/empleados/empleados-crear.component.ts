import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EmpleadosServices } from './empleados.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmpleadosViewModel } from './empleados.model';
import { AreasViewModel } from '../areas/areas.model';
import { SubAreasViewModel } from '../subareas/subareas.model';
import { AreasServices } from '../areas/areas.service';
import { SubAreasServices } from '../subareas/subareas.service';

@Component({
    selector: 'app-empleados-crear',
    templateUrl: './empleados-crear.component.html'

})
export class EmpleadosCrearComponent implements OnInit {

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
        private snackBar: MatSnackBar) {
          
    }

    ngOnInit(): void {
        this.typesId = this.Types;
        this.areasServices.obtenerAreas({ pagina: 0, tamanoPagina: 0 }).subscribe(
            (res: AreasViewModel[]) => {
                this.areas = res;
            },
            (error) => { console.log(error) },
            () => console.log("consulta finalizada"))
    }

    onSubmit(empleado: EmpleadosViewModel) {
        return this.empleadoService.crearEmpleado(empleado).subscribe(
            (res) => {
                this.snackBar.open('empleado creada con exito', 'Crear');
                this.reset();
            },
            (error) => this.snackBar.open('Error al crear el empleado', 'Crear')
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