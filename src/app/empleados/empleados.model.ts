export class EmpleadosViewModel {
    id: string;
    typeIdentification?: number;
    identificationNumber?: string;
    name?: string;
    secondName?: string;
    surName?: string;
    secondSurname?: string;
    subAreaId?: string;

    constructor(obj?: any) {
        this.id = obj && obj.id || null;
        this.typeIdentification = obj && obj.typeIdentification || null;
        this.identificationNumber = obj && obj.identificationNumber || null;
        this.name = obj && obj.name || null;
        this.secondName = obj && obj.secondName || null;
        this.surName = obj && obj.surName || null;
        this.secondSurname = obj && obj.secondSurname || null;
        this.subAreaId = obj && obj.subAreaId || null;
    }
}