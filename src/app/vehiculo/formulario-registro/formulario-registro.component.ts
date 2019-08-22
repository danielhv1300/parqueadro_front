import {
  Component,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { VehiculoService } from '../shared/vehiculo.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.css']
})
export class FormularioRegistroComponent implements OnInit {
  formularioRegistro: FormGroup;
  // Notifico al componente padre que un vehiculo fue registrado para que cargue el listado
  @Output() vehiculoRegistrado = new EventEmitter<void>();

  constructor(
    private formBuilder: FormBuilder,
    private service: VehiculoService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.resetForm();
  }

  onSubmit() {
    this.formularioRegistro.value.cilindraje = this.formularioRegistro.value.cilindraje.toString();
    this.service.crearVehiculo(this.formularioRegistro.value).subscribe(
      res => {
        this.toastr.success('Registro de vehiculo exitoso');

        this.vehiculoRegistrado.emit();
        this.resetForm();
      },
      error => {
        this.toastr.error(error.error.message); // Mensaje de respuesta que se compara con el de Protractor
      }
    );
  }

  resetForm() {
    this.formularioRegistro = this.formBuilder.group({
      placa: '',
      tipoVehiculo: '',
      cilindraje: ''
    });
  }
}
