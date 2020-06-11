import { Component } from '@angular/core';
import { SubAreasViewModel } from './subareas.model';
import { Validators, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SubAreasServices } from './subareas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector:'app-subareas-eliminar',
    templateUrl:'./subareas-eliminar.component.html'

})
export class SubAreasEliminarComponent {
    areaEliminar:SubAreasViewModel= new SubAreasViewModel();

    formLogin = this.fb.group({
        name: ['', Validators.required],
        code: ['', Validators.required],
        id: ['', Validators.required],
        areaId: ['', Validators.required]
    });

    constructor(
        private fb:FormBuilder, 
        private subareaService: SubAreasServices,
        private snackBar : MatSnackBar,
        private route: ActivatedRoute,){
    }
    ngOnInit(): void {
        let idarea = this.route.snapshot.paramMap.get('id');
        this.subareaService.obtenerArea({id:idarea, code:0, name:'', areaId:''}).subscribe(
            (res:SubAreasViewModel) => {
              this.areaEliminar=res;
              this.asignarValoresArea(res);
            }
        )
    }

    asignarValoresArea(area:SubAreasViewModel){
        this.formLogin.controls["id"].setValue(area.id)
        this.formLogin.controls["code"].setValue(area.code)
        this.formLogin.controls["name"].setValue(area.name)
        this.formLogin.controls["areaId"].setValue(area.areaId)
    }

    onSubmit(areaViewModel: SubAreasViewModel)
    {
        return this.subareaService.eliminarArea(areaViewModel).subscribe(
            (res) => {
                this.snackBar.open('Sub eliminada con exito', 'Eliminar');
                this.reset();
            },
            (error) => {
                this.snackBar.open('Error al eliminar la subarea o existe restricción con una llave', 'Eliminar');
                console.log(error);
            }
        )
    }

    reset() {
        for (let name in this.formLogin.controls) {
            this.formLogin.controls[name].setValue('');
            this.formLogin.controls[name].setErrors(null);
        }
    }
}