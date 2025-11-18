import { Component } from '@angular/core';
import { Flores } from '../../models/flores';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {


  /*
   propiedad privada <- informacion sensible  
   contadorId
   Es privado porque es información interna.
 
   */
  private contadorId = 1;

  coleccionProductos: Flores[] = [];

  /* instancia que se vincula con el formulario desde el HTML
   nombrePropiedad: new control ->
   string -> '' / number ->null
   validators.required -> validadp como valor requerido estrictamente
  
  
  */
  /* ""<-string 
  string -> '' / number ->null
  Crea un formulario con FormGroup y FormControl.
  
  formcontrol -> representa cada campo del formulario 


  */
  nuevoProducto = new FormGroup({
    nombre: new FormControl('', Validators.required),
    descripcion: new FormControl(''),
    precio: new FormControl(null, Validators.required),
    /*img: new FormControl(''),
    alt: new FormControl('')*/

  });

  /**
   * @descripciom metodo de creacion de productos segun interfaz 
   */

  /*El método crearProducto no devuelve nada (void). Se llama cuando el usuario quiere agregar un nuevo producto. */

  crearProducto(): void {
    if (this.nuevoProducto.valid) {
      /*Aquí revisa si el formulario es válido.
Si no lo es, no crea el producto. */
      const nuevoProducto: Flores = {

        /* id-> asignamos contador para qie sea autoincrementable*/
        id: this.contadorId++,

        /*
         resto de propiedades, asignamos desde el formulario el valor que se recibio desde su casilla 
         o formControlName
        */
        nombre: this.nuevoProducto.value.nombre!,
        descripcion: this.nuevoProducto.value.descripcion!,
        precio: this.nuevoProducto.value.precio!,


      }

      this.coleccionProductos.push(nuevoProducto);

      console.log("producto agregado", nuevoProducto);
      console.log("coleccion actual de productos", this.coleccionProductos);

      /* reseteamos el formulario */






    }
    this.nuevoProducto.reset();



  }
}




