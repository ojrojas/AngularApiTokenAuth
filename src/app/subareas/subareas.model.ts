export class SubAreasViewModel
{
    id:string;
    code:number;
    name:string;
    areaId:string;

    constructor(obj?:any)
    {
        this.code = obj && obj.code || null;
        this.name = obj && obj.name || null;
        this.id = obj && obj.id || null;
        this.areaId = obj && obj.areaId || null;
    }
}