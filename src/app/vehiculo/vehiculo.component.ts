import { Component, OnInit } from '@angular/core';
import { VehiculoService } from './shared/vehiculo.service';

@Component({
  selector: 'app-vehicul',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css']
})
export class VehiculoComponent implements OnInit {

  constructor(public service: VehiculoService) {

  }

  ngOnInit() {
    this.getVehicles();
  }

  getVehicles() {
    this.service.listarVehiculos();
  }

  sacarVehiculo(placa) {
    this.service.salidaVehiculo(placa);
  }

  marcarPago(placa) {
    this.service.marcarPago(placa);
  }
}
