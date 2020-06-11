import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AreasServices } from './areas.service';
import { AreasViewModel } from './areas.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector:'app-areas-crear',
    templateUrl:'./areas-crear.component.html'

})
export class AreasCrearComponent {
    formLogin = this.fb.group({
        name: ['', Validators.required],
        code: ['', Validators.required]
    });

    constructor(
        private fb:FormBuilder, 
        private areaService: AreasServices,
        private snackBar : MatSnackBar){

    }


    onSubmit(areaViewModel: AreasViewModel)
    {
        return this.areaService.crearArea(areaViewModel).subscribe(
            (res) => {
                this.snackBar.open('Area creada con exito', 'Crear');
                this.reset();
            },
            (error) => this.snackBar.open('Error al crear el area', 'Crear')
        )
    }

    reset() {
        for (let name in this.formLogin.controls) {
            this.formLogin.controls[name].setValue('');
            this.formLogin.controls[name].setErrors(null);
        }
    }
}