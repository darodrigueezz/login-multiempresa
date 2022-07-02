export class Empresa {

    nombreempresa: string;
    estadoempresa: string;
    nit: string;

    constructor(nombreempresa: string, estadoempresa: string, nit: string) {
        this.nombreempresa = nombreempresa;
        this.estadoempresa = estadoempresa;
        this.nit = nit;
    }
}