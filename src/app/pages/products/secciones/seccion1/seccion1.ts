import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tarjeta } from '../../../../models/tarjeta';



@Component({
  selector: 'app-seccion1',
  imports: [CommonModule],
  templateUrl: './seccion1.html',
  styleUrl: './seccion1.css'
})

export class Seccion1 {


  public infoTarjeta: Tarjeta[];

  constructor() {
    this.infoTarjeta = [
      {
        id: "1T",
        img: "../../../../../assets/descarga (3).jpg",
        alt: "hongo",
        titulo: "Maceta decorada",
        descripcion: "Maceta para escritorio decorada en forma de hongito",
        precio: 12000,
        anualPublicacion: 2025
      },

      {
        id: "2t",
        img: "../../../../../assets/descarga (4).jpg ",
        alt: "vaquita",
        titulo: "Maceta vaquita",
        descripcion: "Maceta en forma de vaquita perfecta para tu hogar",
        precio: 15000,
        anualPublicacion: 2025

      },

      {
         id: "3t",
        img: "../../../../../assets/descarga (5).jpg",
        alt: "Frutilla",
        titulo: "Maceta de frutilla",
        descripcion: "Maceta en forma de frutilla tanto para interiores o exteriores",
        precio: 13300,
        anualPublicacion: 2025
      },

      {
         id: "4t",
        img: "../../../../../assets/Maceta de cerámica Perro!  Medida_ 14×10×10cm.jpg",
        alt: "Perrito",
        titulo: "Maceta de perrito",
        descripcion: "Maceta decorada en forma de perrito",
        precio: 12300,
        anualPublicacion: 2025
      },

      {
         id: "5t",
        img: "../../../../../assets/undefined.jpg",
        alt: "Gatito",
        titulo: "Maceta de gatito",
        descripcion: "Maceta en forma de gatito para interiores",
        precio: 12000,
        anualPublicacion: 2025
      }

    ]

  }

  tarjetaSeleccionada: any = null;
  verMasinfo(tarjeta: any) {
    this.tarjetaSeleccionada = tarjeta;
  }
}



