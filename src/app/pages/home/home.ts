import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tarjeta } from '../../models/tarjeta';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  public infofloreria: Tarjeta[];

  constructor() {
    this.infofloreria = [
      {
        id: "1T",
        img: "../../../assets/",
        alt: "tulipanes",
        titulo: "flores",
        descripcion: "variedad de flores",
        anualPublicacion: 2025
      },

      {
        id: "2T",
        img: "../../../assets/dalia_01-flickr-Waldemar_Jan-768x480.jpg",
        alt: "flores",
        titulo: "rosas",
        descripcion: "rosas y blancas",
        anualPublicacion: 2024
      },

      {
        id: "3T",
        img: "../../../assets/Peonias.webp",
        alt: "flores",
        titulo: "peonias",
        descripcion: "son nativas de Asia",
        anualPublicacion: 2024
      },

      {
        id: "4T",
        img: "../../../assets/ramo-de-12-tulipanes.jpg",
        alt: "flores",
        titulo: "tulipanes",
        descripcion: " género de plantas perenes",
        anualPublicacion: 2025
      }
    ]


  }

  tarjetaSeleccionada: any = null;
  verMasinfo(tarjeta: any) {
    this.tarjetaSeleccionada = tarjeta;
  }

}



