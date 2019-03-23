export class Recurso {
    id: number;
    serial: string;
    tipo: number;
    proveedor: number;
    estado: string;
    encargado: number;
    fechaAsignacion: string;
    marca: string;
}

export class RecursoPost {
    serial: string;
    tipo: number;
    proveedor: number;
    estado: string;
    encargado: number;
    marca: string;
}