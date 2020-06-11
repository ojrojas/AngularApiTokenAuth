import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { AreasServices } from './areas.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { AreasViewModel } from './areas.model';

@Component({
    selector:'app-areas-eliminar',
    templateUrl:'./areas-eliminar.component.html'

})
export class AreasEliminarComponent {

    areaEliminar:AreasViewModel= new AreasViewModel();

    formLogin = this.fb.group({
        name: ['', Validators.required],
        code: ['', Validators.required],
        id: ['', Validators.required]
    });

    constructor(
        private fb:FormBuilder, 
        private areaService: AreasServices,
        private snackBar : MatSnackBar,
        private route: ActivatedRoute,){
    }
    ngOnInit(): void {
        let idarea = this.route.snapshot.paramMap.get('id');
        this.areaService.obtenerArea({id:idarea, code:0, name:''}).subscribe(
            (res:AreasViewModel) => {
              this.areaEliminar=res;
              this.asignarValoresArea(res);
            }
        )
    }

    asignarValoresArea(area:AreasViewModel){
        this.formLogin.controls["id"].setValue(area.id)
        this.formLogin.controls["code"].setValue(area.code)
        this.formLogin.controls["name"].setValue(area.name)
    }

    onSubmit(areaViewModel: AreasViewModel)
    {
        return this.areaService.eliminarArea(areaViewModel).subscribe(
            (res) => {
                this.snackBar.open('Area eliminada con exito', 'Eliminar');
                this.reset();
            },
            (error) => {
                this.snackBar.open('Error al eliminar el area o existe restricción con una llave', 'Eliminar');
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