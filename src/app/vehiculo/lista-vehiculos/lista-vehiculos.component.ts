import { Vehiculo } from './../shared/vehiculo.model';
import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-lista-vehiculos',
  templateUrl: './lista-vehiculos.component.html',
  styleUrls: ['./lista-vehiculos.component.css']
})
export class ListaVehiculosComponent {
  @Input() vehiculos: Vehiculo[];


  @Output() actualizarVehiculo = new EventEmitter<string>();
  @Output() pagoRegistrado = new EventEmitter<string>();

  constructor() {}



  sacarVehiculo(placa: string) {
    this.actualizarVehiculo.emit(placa);
  }

  registrarPago(placa: string) {
    this.pagoRegistrado.emit(placa);
  }
}
