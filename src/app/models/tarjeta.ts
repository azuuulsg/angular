export interface Tarjeta {
    id: string; // numero como letras -> ej: 123AB/ 123/ ABC
    img: string;
    alt: string;
    titulo: string;
    descripcion: string;
    precio?: number;
    
     

    anualPublicacion: number; 
}

//interfaz molde o plantillas que define como debe ser un objeto -> id, img...
