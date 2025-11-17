import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tarjeta } from '../../models/tarjeta';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {
  /*propiedad publica: libre de acceso a su contenido
  
  propiedad privada: contenido restringido
  
  */
  public infoTarjeta: Tarjeta[];

  constructor() {
    this.infoTarjeta = [
      {
        id: "1",
        img: "../../../../../assets/famo de my melody.png",
        alt: "Ramo con peluche",
        titulo: "Ramo con peluche",
        descripcion: "Ramo de color rosa con peluche de my melody incluido",
        precio: 13200,
        anualPublicacion: 2025
      },

      {
        id: "2T",
        img: "../../../../../assets/descarga (1).jpg",
        alt: "Ramo negro",
        titulo: "Ramo de kuromi",
        descripcion: "Ramo de color negro con peluche de kuromi ",
        precio: 14000,
        anualPublicacion: 2025
      },

      {
        id: "3T",
        img: "../../../../../assets/ʚ kimi ɞ on Twitter.jpg",
        alt: "Ramo",
        titulo: "Ramo de peluches",
        descripcion: "Ramo realizado solo con peluches",
        precio: 23000,
        anualPublicacion: 2025
      },

      {
        id: "4T",
        img: "../../../../../assets/Ein zarter, ästhetischer Blumenstrauß in sanftem….jpg",
        alt: "Ramo de rosas",
        titulo: "Ramo de rosas con peluche ",
        descripcion: "Rosas con peluche de conejito incluido",
        precio: 23000,
        anualPublicacion: 2025
      },

      {
        id: "5t",
        img: "../../../../../assets/cinnamoroll bouquet.jpg",
        alt: "cinnamoroll",
        titulo: "Ramo de cinnamoroll",
        descripcion: "Ramo con flores con peluche incluido de cinnamorroll",
        precio: 23000,
        anualPublicacion: 2025
      },

      {
        id: "6t",
        img: "../../../../../assets/descarga (3).jpg",
        alt: "hongo",
        titulo: "Maceta decorada",
        descripcion: "Maceta para escritorio decorada en forma de hongito",
        precio: 12000,
        anualPublicacion: 2025

      },

      {
        id: "7t",
        img: "../../../../../assets/descarga (4).jpg",
        alt: "vaquita",
        titulo: "Maceta vaquita",
        descripcion: "Maceta en forma de vaquita perfecta para tu hogar",
        precio: 15000,
        anualPublicacion: 2025
      },

      {
        id: "8t",
        img: "../../../../../assets/descarga (5).jpg",
        alt: "Frutilla",
        titulo: "Maceta de frutilla",
        descripcion: "Maceta en forma de frutilla tanto para interiores o exteriores",
        precio: 13300,
        anualPublicacion: 2025
      },

      {
        id: "9t",
        img: "../../../../../assets/Maceta de cerámica Perro!  Medida_ 14×10×10cm.jpg",
        alt: "Perrito",
        titulo: "Maceta de perrito",
        descripcion: "Maceta decorada en forma de perrito",
        precio: 12300,
        anualPublicacion: 2025
      },

      {
        id: "10t",
        img: "../../../../../assets/undefined.jpg",
        alt: "Gatito",
        titulo: "Maceta de gatito",
        descripcion: "Maceta en forma de gatito para interiores",
        precio: 12000,
        anualPublicacion: 2025
      },

      {
        id: "11t",
        img: "../../../../../assets/descarga (6).jpg",
        alt: "Tulipanes",
        titulo: "Ramo de tulipanes",
        descripcion: "Ramo de flores tulipanes amarillas para regalo ",
        precio: 16000,
        anualPublicacion: 2025
      },

      {
        id: "12t",
        img: "../../../../../assets/Lovely Bouquet.jpg",
        alt: "Rosas",
        titulo: "Ramo de rosas",
        descripcion: "Ramo de flores de rosas",
        precio: 20500,
        anualPublicacion: 2025
      },

      {
        id: "13t",
        img: "../../../../../assets/flowers.jpg",
        alt: "Rosas",
        titulo: "Rosas de color rosado",
        descripcion: "Ramo de rosas en envoltorio negro",
        precio: 21000,
        anualPublicacion: 2025
      },

      {
        id: "14t",
        img: "../../../../../assets/descarga (7).jpg",
        alt: "peonias",
        titulo: "Ramo de peonias",
        descripcion: "Ramo de flores de peonias",
        precio: 21500,
        anualPublicacion: 2025
      },

      {
        id: "15t",
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
    verMasinfo(tarjeta: any){
      this.tarjetaSeleccionada = tarjeta;
    }

}
