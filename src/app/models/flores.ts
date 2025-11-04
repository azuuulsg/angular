import { StringTokenKind } from "@angular/compiler";

export interface Flores {
    id: number;// id tipo number para que pueda ser auto incrementableng
    img?: string; //indica que no es una propiedad estrictamente obligatoria
    alt?: string;
    nombre: string;
    precio: number;
    descripcion: string;
}

export interface indumendaria{
    id: number;
    nombre: string;
    fechapublicacion: Date; //fecha
    activo: boolean; //true/false

}

