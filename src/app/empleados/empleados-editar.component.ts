import { Component } from '@angular/core';
import { AreasViewModel } from '../areas/areas.model';
import { SubAreasViewModel } from '../subareas/subareas.model';
import { Validators, FormBuilder } from '@angular/forms';
import { EmpleadosServices } from './empleados.service';
import { AreasServices } from '../areas/areas.service';
import { SubAreasServices } from '../subareas/subareas.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmpleadosViewModel } from './empleados.model';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector:'app-empleados-editar',
    templateUrl:'./empleados-editar.component.html'

})
export class EmpleadosEditarComponent {
   
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
        return this.empleadoService.editarEmpleado(empleado).subscribe(
            (res) => {
                this.snackBar.open('empleado editada con exito', 'Crear');
                this.reset();
            },
            (error) => this.snackBar.open('Error al editada el empleado', 'Crear')
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

    soloNumeros(event) {
        let charCode = (event.which) ? event.which : event.keyCode;
        if (charCode != 46 && charCode > 31
            && (charCode < 48 || charCode > 57))
            return false;
        return true;
    }
}