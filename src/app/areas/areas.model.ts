export class AreasViewModel
{
    id:string;
    code:number;
    name:string;

    constructor(obj?:any)
    {
        this.code = obj && obj.code || null;
        this.name = obj && obj.name || null;
        this.id = obj && obj.id || null;
    }
}