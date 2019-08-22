import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VistaComponent } from './vista/vista.component';
import { FormularioRegistroComponent } from './formulario-registro/formulario-registro.component';
import { ListaVehiculosComponent } from './lista-vehiculos/lista-vehiculos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VehiculoComponent } from './vehiculo.component';



@NgModule({
  declarations: [VistaComponent, FormularioRegistroComponent, ListaVehiculosComponent, VehiculoComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class VehiculoModule { }
