import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AreasServices } from './areas.service';
import { AreasViewModel } from './areas.model';
import { ActivatedRoute } from '@angular/router';
import { getAttrsForDirectiveMatching } from '@angular/compiler/src/render3/view/util';

@Component({
    selector:'app-areas-editar',
    templateUrl:'./areas-editar.component.html'

})
export class AreasEditarComponent implements OnInit {
    
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
        return this.areaService.editarArea(areaViewModel).subscribe(
            (res) => {
                this.snackBar.open('Area editada con exito', 'Editar');
                this.reset();
            },
            (error) => {
                this.snackBar.open('Error al editar el area', 'Editar');
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