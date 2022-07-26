import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {
  @Input() public nuevo: Personaje = {
    nombre: '',
    poder: 0,
  };

  constructor(
    private dbzService: DbzService
  ){ }
  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar() {
    if (this.nuevo.nombre !== '' && this.nuevo.poder !== 0) {

      this.dbzService.agregarPersonajes(this.nuevo);
      // this.onNuevoPersonaje.emit(this.nuevo);
      this.nuevo = {
        nombre: '',
        poder: 0,
      };
    } else {
      return;
    }
  }
}
