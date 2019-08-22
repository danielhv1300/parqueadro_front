import { VehiculoComponent } from './vehiculo/vehiculo.component';
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// Componentes
import { FormularioRegistroComponent } from './vehiculo/formulario-registro/formulario-registro.component';
import { ListaVehiculosComponent } from './vehiculo/lista-vehiculos/lista-vehiculos.component';

// Servicios
import { VehiculoService } from './vehiculo/shared/vehiculo.service';

@NgModule({
  declarations: [
    AppComponent,
    FormularioRegistroComponent,
    ListaVehiculosComponent,
    VehiculoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [VehiculoService],
  bootstrap: [AppComponent],
})
export class AppModule { }
