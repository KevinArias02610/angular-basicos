import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  public personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 200000
    },
    {
      nombre: 'Vegeta',
      poder: 250000
    }
  ]

  public nuevo: Personaje = {
    nombre: '',
    poder: 0
  }
  agregarNuevoPersonaje(argumento: Personaje){
    this.personajes.push(argumento)
  }

}
