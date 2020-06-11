import { Component } from '@angular/core';
import { SubAreasViewModel } from './subareas.model';
import { Validators, FormBuilder } from '@angular/forms';
import { SubAreasServices } from './subareas.service';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AreasViewModel } from '../areas/areas.model';
import { AreasServices } from '../areas/areas.service';

@Component({
    selector:'app-subareas-editar',
    templateUrl:'./subareas-editar.component.html'

})
export class SubAreasEditarComponent {

    areas:AreasViewModel[];
    formLogin = this.fb.group({
        name: ['', Validators.required],
        code: ['', Validators.required],
        id: ['', Validators.required],
        areaId:['', Validators.required]
    });

    constructor(
        private fb:FormBuilder, 
        private subareaService: SubAreasServices,
        private areasService:AreasServices,
        private snackBar : MatSnackBar,
        private route: ActivatedRoute,){
    }
    ngOnInit(): void {
        let idarea = this.route.snapshot.paramMap.get('id');
        this.subareaService.obtenerArea({id:idarea, code:0, name:'',areaId:''}).subscribe(
            (res:SubAreasViewModel) => {
               this.asignarValoresArea(res);
            }
        )

        this.areasService.obtenerAreas({pagina:0,tamanoPagina:0}).subscribe(
            (res:AreasViewModel[])=>{ 
                 this.areas = res;               
            },
            (error)=> { console.log(error)} ,
            ()=> console.log("consulta finalizada"))
    }

    asignarValoresArea(area:SubAreasViewModel){
        this.formLogin.controls["id"].setValue(area.id)
        this.formLogin.controls["code"].setValue(area.code)
        this.formLogin.controls["name"].setValue(area.name)
        this.formLogin.controls["areaId"].setValue(area.areaId)
    }

    onSubmit(areaViewModel: SubAreasViewModel)
    {
        return this.subareaService.editarArea(areaViewModel).subscribe(
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