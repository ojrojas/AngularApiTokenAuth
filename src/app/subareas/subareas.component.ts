import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Paginacion } from '../modelpaginacion/paginacion.interface';
import { SubAreasViewModel } from './subareas.model';
import { SubAreasServices } from './subareas.service';

@Component({
  selector: 'app-subareas',
  templateUrl: './subareas.component.html',
  styleUrls: ['./subareas.component.scss']
})
export class SubAreasComponent implements OnInit {
  dataSource:any=[];
  paginacion:Paginacion;
  cantidadAreas:number;
  nombreColumnas: string[] = ['Codígo', 'Nombre', 'AreaId','Acciones'];
  pageSizeOptions: number[] = [5, 10, 25, 100];

  constructor(
    private areaService:SubAreasServices) {
   }

  ngOnInit(): void {
    this.areaService.obtenerAreas({pagina:0,tamanoPagina:10}).subscribe(
      (res:Array<SubAreasViewModel>)=>{
        if(res.length > 0)
        this.dataSource = res;
        console.log(res);
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
      (res:Array<SubAreasViewModel>)=>{
        if(res.length > 0)
        this.dataSource = res;
      });
  }

}
