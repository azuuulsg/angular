import { Routes } from '@angular/router';
import {Home} from './page/home/home';
import { About } from './pages/about/about';
import { Products } from './paga/products/products';
import { Contact } from './paga/contact/contact';


export const routes: Routes = [
    {path: "home", component: Home},
    {path: "about", component: About},
    {path: "products", component: Products},
    {path: "contact", component: Contact}

];
