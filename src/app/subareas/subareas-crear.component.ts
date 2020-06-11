import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { SubAreasServices } from './subareas.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SubAreasViewModel } from './subareas.model';
import { AreasServices } from '../areas/areas.service';
import { AreasViewModel } from '../areas/areas.model';

@Component({
    selector:'app-subareas-crear',
    templateUrl:'./subareas-crear.component.html'

})
export class SubAreasCrearComponent implements OnInit{
    areas:AreasViewModel[];
    formLogin = this.fb.group({
        name: ['', Validators.required],
        code: ['', Validators.required],
        areaId: ['', Validators.required],
    });

    constructor(
        private fb:FormBuilder, 
        private subareaService: SubAreasServices,
        private areaService :AreasServices,
        private snackBar : MatSnackBar){

    }
    ngOnInit(): void {
       this.areaService.obtenerAreas({pagina:0,tamanoPagina:0}).subscribe(
           (res:AreasViewModel[])=>{ 
                this.areas = res;               
           },
           (error)=> { console.log(error)} ,
           ()=> console.log("consulta finalizada"))
    }


    onSubmit(areaViewModel: SubAreasViewModel)
    {
        return this.subareaService.crearArea(areaViewModel).subscribe(
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