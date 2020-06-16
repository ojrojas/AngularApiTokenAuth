import { Injectable } from "@angular/core";

Injectable({
    providedIn:'root'
})

export class InjectableRutasService {

    baseUrlApp:string = "https://localhost:5001";
    
    //Empleados
    public ObtenerEmpleados:string = `${this.baseUrlApp}/empleados/obtenerempleados`
    public ObtenerEmpleado:string = `${this.baseUrlApp}/empleados/obtenerempleado`
    public ContarEmpleados:string = `${this.baseUrlApp}/empleados/contarempleados`
    public CrearEmpleado:string = `${this.baseUrlApp}/empleados/crearempleado`
    public ActualizarEmpleado:string = `${this.baseUrlApp}/empleados/actualizarempleado`
    public EliminarEmpleado:string = `${this.baseUrlApp}/empleados/eliminarempleado`
    public BuscarEmpleados:string = `${this.baseUrlApp}/empleados/buscarempleados?filtro=`

    //Areas
    public ContarAreas:string = `${this.baseUrlApp}/areas/contarareas`
    public CrearArea:string = `${this.baseUrlApp}/areas/creararea`
    public ActualizarArea:string = `${this.baseUrlApp}/areas/actualizararea`
    public EliminarArea:string = `${this.baseUrlApp}/areas/eliminararea`
    public ObtenerArea:string = `${this.baseUrlApp}/areas/obtenerarea`
    public ObtenerAreas:string = `${this.baseUrlApp}/areas/obtenerareas`
   

    //SubAreas
    public ContarSubAreas:string = `${this.baseUrlApp}/subareas/contarsubareas`
    public CrearSubArea:string = `${this.baseUrlApp}/subareas/crearsubarea`
    public ActualizarSubArea:string = `${this.baseUrlApp}/subareas/actualizarsubarea`
    public EliminarSubArea:string = `${this.baseUrlApp}/subareas/eliminarsubarea`
    public ObtenerSubArea:string = `${this.baseUrlApp}/subareas/obtenersubarea`
    public ObtenerSubAreas:string = `${this.baseUrlApp}/subareas/obtenersubareas`
    public ObtenerSubAreasByAreaId:string = `${this.baseUrlApp}/subareas/obtenersubareasbyareaid`

    //CuentasManager
    public ObtenerToken:string = `${this.baseUrlApp}/CuentasManager/ObtenerToken`
    public CrearUsuarioApp:string = `${this.baseUrlApp}/cuentasmanager/crearusuarioApp`
    public EliminarUsuarioApp:string = `${this.baseUrlApp}/cuentasmanager/eliminarusuarioapp`
}