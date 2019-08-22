import { Injectable } from '@angular/core';
import { Vehiculo } from './vehiculo.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {
  vehiculos: Vehiculo[];
  vehiculoPath = '/vehiculo/';

  constructor(private http: HttpClient) {}

  crearVehiculo(vehiculo) {

    return this.http.post(environment.apiUrl + this.vehiculoPath, vehiculo);
  }

  salidaVehiculo(placa) {
    this.http
      .put(environment.apiUrl + this.vehiculoPath + placa, null)
      .subscribe(valor => {
        const vehiculo = this.vehiculos.find(u => u.placa === placa);
        vehiculo.valor = valor as number;
      });
  }

  marcarPago(placa) {
    this.vehiculos = this.vehiculos.filter(u => u.placa !== placa);
  }

  listarVehiculos() {
    this.http
      .get<Vehiculo[]>(environment.apiUrl + this.vehiculoPath)
      .subscribe(respuesta => {
        this.vehiculos = respuesta;
      });
  }
}
