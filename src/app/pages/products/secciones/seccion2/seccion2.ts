import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tarjeta } from '../../../../models/tarjeta';

@Component({
  selector: 'app-seccion2',
  imports: [CommonModule],
  templateUrl: './seccion2.html',
  styleUrl: './seccion2.css'
})
export class Seccion2 {

  public infoTarjeta: Tarjeta[];

  constructor() {
    this.infoTarjeta = [
      {
        id: "1T",
        img: "../../../../../assets/descarga (6).jpg",
        alt: "Tulipanes",
        titulo: "Ramo de tulipanes",
        descripcion: "Ramo de flores tulipanes amarillas para regalo",
        precio: 16000,
        anualPublicacion: 2025
      },

      {
        id: "2t",
        img: "../../../../../assets/Lovely Bouquet.jpg",
        alt: "Rosas",
        titulo: "Ramo de rosas",
        descripcion: "Ramo de flores de rosas",
        precio: 20500,
        anualPublicacion: 2025

      },

      {
        id: "3t",
        img: "../../../../../assets/flowers.jpg",
        alt: "Rosas",
        titulo: "Rosas de color rosado",
        descripcion: "Ramo de rosas en envoltorio negro",
        precio: 21000,
        anualPublicacion: 2025
      },

      {
        id: "4t",
        img: "../../../../../assets/descarga (7).jpg",
        alt: "peonias",
        titulo: "Ramo de peonias",
        descripcion: "Ramo de flores de peonias",
        precio: 21500,
        anualPublicacion: 2025
      },

      {
        id: "5t",
        img: "../../../../../assets/Margaritas 🌼.jpg",
        alt: "Margaritas",
        titulo: "Ramo de margaritas",
        descripcion: "Ramo de margaritas perfecto para regalar",
        precio: 22000,
        anualPublicacion: 2025
      }

    ]

  }

  tarjetaSeleccionada: any = null;
  verMasinfo(tarjeta: any) {
    this.tarjetaSeleccionada = tarjeta;
  }
}






