import { Component } from '@angular/core';
import { Flores } from '../../../../models/flores';
import { FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { Products } from '../../products';


@Component({
  selector: 'app-seccion1',
  imports: [ReactiveFormsModule],
  templateUrl: './seccion1.html',
  styleUrl: './seccion1.css'
})

export class Seccion1 {
  /*
  propiedad privada <- informacion sensible  

  */
  private contadorId = 1;

  coleccionProductos: Flores[] = [];
  
  /* instancia que se vincula con el formulario desde el HTML
   nombrePropiedad: new control ->
   string -> '' / number ->null
   validators.required -> validadp como valor requerido estrictamente
  
  
  */
  nuevoProducto = new FormGroup ({
    nombre: new FormControl('',Validators.required),
    descripcion: new FormControl ('',Validators.required),
    precio: new FormControl(null, Validators.required),
    /*img: new FormControl(''),
    alt: new FormControl('')*/

  });

  /**
   * @descripciom metodo de creacion de productos segun interfaz 
   */


  crearProducto(): void{
    if(this.nuevoProducto.valid){
      const nuevoProducto: Flores = {

        /* id-> asignamos contador para qie sea autoincrementable*/
        id: this.contadorId++,

        /*
         resto de propiedades, asignamos desde el formulario el valor que se recibio desde su casilla 
         o formControlName
        */
        nombre: this.nuevoProducto.value.nombre!,

      }

      this.coleccionProductos.push(nuevoProducto);

      console.log("producto agregado", nuevoProducto);
      console.log("coleccion actual de productos", this.coleccionProductos);

      /* reseteamos el formulario */
      this.nuevoProducto.reset();
    }
  }
}



