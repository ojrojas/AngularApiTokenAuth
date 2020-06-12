import { Injectable } from "@angular/core";

Injectable({
    providedIn:'root'
})

export class InjectableRutasService {
    
    //Empleados
    public ObtenerEmpleados:string = "https://localhost:5001/empleados/obtenerempleados"
    public ObtenerEmpleado:string = "https://localhost:5001/empleados/obtenerempleado"
    public ContarEmpleados:string = "https://localhost:5001/empleados/contarempleados"
    public CrearEmpleado:string = "https://localhost:5001/empleados/crearempleado"
    public ActualizarEmpleado:string = "https://localhost:5001/empleados/actualizarempleado"
    public EliminarEmpleado:string = "https://localhost:5001/empleados/eliminarempleado"

    //Areas
    public ContarAreas:string = "https://localhost:5001/areas/contarareas"
    public CrearArea:string = "https://localhost:5001/areas/creararea"
    public ActualizarArea:string = "https://localhost:5001/areas/actualizararea"
    public EliminarArea:string = "https://localhost:5001/areas/eliminararea"
    public ObtenerArea:string = "https://localhost:5001/areas/obtenerarea"
    public ObtenerAreas:string = "https://localhost:5001/areas/obtenerareas"
   

    //SubAreas
    public ContarSubAreas:string = "https://localhost:5001/subareas/contarsubareas"
    public CrearSubArea:string = "https://localhost:5001/subareas/crearsubarea"
    public ActualizarSubArea:string = "https://localhost:5001/subareas/actualizarsubarea"
    public EliminarSubArea:string = "https://localhost:5001/subareas/eliminarsubarea"
    public ObtenerSubArea:string = "https://localhost:5001/subareas/obtenersubarea"
    public ObtenerSubAreas:string = "https://localhost:5001/subareas/obtenersubareas"
    public ObtenerSubAreasByAreaId:string = "https://localhost:5001/subareas/obtenersubareasbyareaid"

    //CuentasManager
    public ObtenerToken:string = "https://localhost:5001/CuentasManager/ObtenerToken"
    public CrearUsuarioApp:string = "https://localhost:5001/cuentasmanager/crearusuarioApp"
    public EliminarUsuarioApp:string = "https://localhost:5001/cuentasmanager/eliminarusuarioapp"
}