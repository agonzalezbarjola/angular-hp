import { Component } from '@angular/core';
import {FooterInterface, NavigatorInterface} from './core/models/Core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Game of Thrones';
  public navigator : NavigatorInterface[]=[
    {
      name: "Inicio",
      link:"/home"
    },
    {
      name: "Casas",
      link:"/houses"
    },
    {
      name: "Personajes",
      link:"/characters"
    },
    {
      name: "Sobre nosotros",
      link:"/about"
    },
  ];
  public footer : FooterInterface = {
    creator: "Álvaro González",
    from : "Upgrade Hub",
    contact: "agonzalezbarjola@gmail.com"

  }
}
