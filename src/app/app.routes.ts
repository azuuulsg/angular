import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Products } from './pages/products/products';
import { Contact } from './pages/contact/contact';
import { Seccion1 } from './pages/products/secciones/seccion1/seccion1';


export const routes: Routes = [
    /*definimos rutas general o raiz en especifico*/
    {
        path: "", component: Home
    },
    { path: "home", component: Home },
    { path: "about", component: About },
    { path: "products", component: Products },
    { path: "contact", component: Contact },

    { path: "seccion1", component: Seccion1},
    

];
