import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tarjeta } from '../../models/tarjeta';

/*
 Tarjeta:
 Es una interfaz o clase modelo que describes en mi carpeta models.

 imports: [CommonModule]
  Permite usar directivas como *ngFor, *ngIf, ngClass,
  */

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {


  public infofloreria: Tarjeta[];

  /*infofloreria: Tarjeta[];
Es un arreglo de objetos del tipo Tarjeta.
Representa todos los productos (macetas, flores, ramos, etc.) que se van a renderizar en pantalla. */

  constructor() {
    this.infofloreria = [

      /*
     Inicializa el arreglo infofloreria con objetos de tipo Tarjeta.
      Cada objeto es un producto y contiene:
      id: identificador único
     img: ruta a la imagen en la carpeta assets
      alt: texto alternativo (accesibilidad)
      titulo: nombre del producto
      descripcion: texto descriptivo
      precio: valor numérico
      anualPublicacion: año de publicación o actualización      
            
      */

      {
        id: "1T",
        img: "../../../assets/maceta.jpg",
        alt: "maceta",
        titulo: "maceta decorada",
        descripcion: "maceta para decorar tu hogar",
        precio: 10000,
        anualPublicacion: 2025



      },

      {
        id: "2T",
        img: "../../../assets/famo de my melody.png",
        alt: "Ramo de flores con peluches",
        titulo: "Ramo con peluches",
        descripcion: "Incluido con peluches y rosas a elegion",
        precio: 12000,
        anualPublicacion: 2024

      },

      {
        id: "3T",
        img: "../../../assets/Peonias.webp",
        alt: "flores",
        titulo: "peonias",
        descripcion: "Ramo de peonias",
        precio: 13000,
        anualPublicacion: 2024
      },

      {
        id: "4T",
        img: "../../../assets/ramoconfondo.png",
        alt: "flores",
        titulo: "tulipanes",
        descripcion: " Ramo de tulipanes",
        precio: 14000,
        anualPublicacion: 2025
      },


    ]


  }
  /*Esta línea crea una propiedad dentro del componente que sirve para almacenar una sola tarjeta seleccionada.
   Al iniciar, no hay tarjeta seleccionada, por eso se asigna:
   null
   Más tarde, cuando el usuario hace clic en “Ver más”, esta variable dejará de ser null y contendrá un objeto como: 2t */
  tarjetaSeleccionada: any = null;
  verMasinfo(tarjeta: any) {
    this.tarjetaSeleccionada = tarjeta;
  }


  /*

  Este método recibe como parámetro la tarjeta sobre la que se hizo clic.
  Ejemplo:
  Si el usuario hace clic en el ramo de peonias…
   tarjeta recibe:

    {
      id: "3T",
      titulo: "peonias",
      descripcion: "Ramo de peonias",
      precio: 13000
    }
   */
}



