import { Component, OnInit } from '@angular/core';
import { Paginacion } from '../modelpaginacion/paginacion.interface';
import { EmpleadosViewModel } from './empleados.model';
import { EmpleadosServices } from './empleados.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.scss']
})
export class EmpleadosComponent implements OnInit {

  dataSource:any=[];
  paginacion:Paginacion;
  cantidadAreas:number;
  nombreColumnas: string[] = ['Codígo', 'Nombre', 'AreaId','Acciones'];
  pageSizeOptions: number[] = [5, 10, 25, 100];

  constructor(
    private empleadosServices:EmpleadosServices) {
   }

  ngOnInit(): void {
    this.empleadosServices.obtenerEmpleados({pagina:0,tamanoPagina:10}).subscribe(
      (res:Array<EmpleadosViewModel>)=>{
        if(res.length > 0)
        this.dataSource = res;
        console.log(res);
      }
    );

    this.empleadosServices.contarEmpleados().subscribe(
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
    this.empleadosServices.obtenerEmpleados({pagina:even.pageIndex+1,tamanoPagina:even.pageSize}).subscribe(
      (res:Array<EmpleadosViewModel>)=>{
        if(res.length > 0)
        this.dataSource = res;
      });
  }


}
