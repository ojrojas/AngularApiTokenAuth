export class EmpleadosViewModel {
    id: string;
    typeidentification: string;
    identificationnumber: string;
    name: string;
    secondname: string;
    Surname: string;
    secondsurname: string;
    subareaId: string;

    constructor(obj?: any) {
        this.id = obj && obj.id || null;
        this.typeidentification = obj && obj.typeidentification || null;
        this.identificationnumber = obj && obj.identificationnumber || null;
        this.name = obj && obj.name || null;
        this.secondname = obj && obj.secondname || null;
        this.Surname = obj && obj.Surname || null;
        this.secondsurname = obj && obj.secondsurname || null;
        this.subareaId = obj && obj.subareaId || null;
    }
}