import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tarjeta } from '../../../../models/tarjeta';

@Component({
  selector: 'app-seccion3',
  imports: [CommonModule],
  templateUrl: './seccion3.html',
  styleUrl: './seccion3.css'
})
export class Seccion3 {


  public infoTarjeta: Tarjeta[];

  constructor() {
    this.infoTarjeta = [
      {
        id: "1T",
        img: "../../../../../assets/famo de my melody.png",
        alt: "Ramo con peluche",
        titulo: "Ramo con peluche",
        descripcion: "Ramo de color rosa con peluche de my melody incluido",
        precio: 12000,
        anualPublicacion: 2025
      },

      {
        id: "2t",
        img: "../../../../../assets/rosas eternas, 🌹.jpg",
        alt: "Ramo",
        titulo: "Unica oferta",
        descripcion: "Ramo con peluche, flores de goma!",
        precio: 10500,
        anualPublicacion: 2025

      },

      {
        id: "3t",
        img: "../../../../../assets/ʚ kimi ɞ on Twitter.jpg",
        alt: "Ramo de solo peluches",
        titulo: "Ramo con peluches",
        descripcion: "Ramo hecho solo con peluches (peluches a eleccion)",
        precio: 13300,
        anualPublicacion: 2015
      },

      {
        id: "4t",
        img: "../../../../../assets/Ein zarter, ästhetischer Blumenstrauß in sanftem….jpg",
        alt: "Ramo de conejo",
        titulo: "Ramo con peluche",
        descripcion: "Ramo con peluche de conejo incluido",
        precio: 13300,
        anualPublicacion: 2025
      },

      {
        id: "5t",
        img: "../../../../../assets/cinnamoroll bouquet.jpg",
        alt: "Cinanmoroll ramo",
        titulo: "Ramo con cinnamorrol",
        descripcion: "Ramo con flores con peluche incluido de cinnamorroll",
        precio: 18000,
        anualPublicacion: 2025
      }

    ]

  }

  tarjetaSeleccionada: any = null;
  verMasinfo(tarjeta: any) {
    this.tarjetaSeleccionada = tarjeta;
  }
}



