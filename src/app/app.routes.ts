import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Products } from './pages/products/products';
import { Contact } from './pages/contact/contact';
import { Seccion1 } from './pages/products/secciones/seccion1/seccion1';
import { Seccion2 } from './pages/products/secciones/seccion2/seccion2';
import { Seccion3 } from './pages/products/secciones/seccion3/seccion3';
import { Ofertas } from './pages/ofertas/ofertas';




export const routes: Routes = [
    /*definimos rutas general o raiz en especifico*/
    {
        path: "", component: Home
    },
    { path: "home", component: Home },
    { path: "about", component: About },
    { path: "products", component: Products },
    { path: "contact", component: Contact },
    { path: "ofertas", component: Ofertas},
    

    
    

    { path: "seccion1", component: Seccion1},
    { path: "seccion2", component: Seccion2},
    { path: "seccion3", component: Seccion3},

    

    

];
