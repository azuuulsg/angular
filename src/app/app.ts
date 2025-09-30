import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { About } from './pages/about/about';
import { Home } from './page/home/home';
import { Contact } from './paga/contact/contact';
import { Products } from './paga/products/products';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,About,Home,Contact,Products],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('nuevoproyecto');
}
