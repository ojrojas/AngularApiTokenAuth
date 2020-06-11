import { Component, OnInit } from '@angular/core';
import { AreasServices } from './areas.service';
import { Paginacion } from '../modelpaginacion/paginacion.interface';
import { AreasViewModel } from './areas.model';
import { PageEvent } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';


interface Area {
  codigo:number,
  nombre:string,
  id:string
}

@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.scss']
})

export class AreasComponent implements OnInit {

  dataSource:any=[];
  paginacion:Paginacion;
  cantidadAreas:number;
  nombreColumnas: string[] = ['Codígo', 'Nombre', 'Acciones'];
  pageSizeOptions: number[] = [5, 10, 25, 100];

  constructor(
    private areaService:AreasServices) {
   }

  ngOnInit(): void {
    this.areaService.obtenerAreas({pagina:0,tamanoPagina:10}).subscribe(
      (res:Array<AreasViewModel>)=>{
        if(res.length > 0)
        this.dataSource = res;
      }
    );

    this.areaService.contarArea().subscribe(
      (val:any) => {
        console.log(val);
        this.cantidadAreas = val;
      }
    )
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
      
    }
  }

  onCambioPage(even:PageEvent){
    console.log("esto es event" , even);
    this.areaService.obtenerAreas({pagina:even.pageIndex+1,tamanoPagina:even.pageSize}).subscribe(
      (res:Array<AreasViewModel>)=>{
        if(res.length > 0)
        this.dataSource = res;
      });
  }


}
