export  class TokenViewmodel
{
    token:string;
    expire_in:number;
    nickname:string;

    constructor(obj?:any){
        this.token = obj && obj.token || null;
        this.expire_in = obj && obj.expire_in || null;
        this.nickname = obj && obj.nickname || null;
    }
    
}