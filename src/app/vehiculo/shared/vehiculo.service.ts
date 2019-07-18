import { Injectable } from '@angular/core';
import { Vehiculo } from './vehiculo.model';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  vehiculo:Vehiculo;
  listaVehiculosParqueados:Vehiculo[];

  constructor() { }
}
