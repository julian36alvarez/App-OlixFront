import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../shared/service/cliente.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Cliente } from '../../shared/model/cliente';

const LONGITUD_MINIMA_PERMITIDA_TEXTO = 3;
const LONGITUD_MAXIMA_PERMITIDA_TEXTO = 20;

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.scss']
})
export class CrearClienteComponent implements OnInit {
  clienteForm: FormGroup;
  constructor(protected clienteServices: ClienteService) { }

  public cliente: Cliente = new Cliente();
  public exito = false;
  public errores = false;
  public nombreExepcion = '';
  public mensaje = '';
  ngOnInit() {
    this.construirFormularioCliente();
  }

  crearCliente() {
    console.log('Click');
    if (this.clienteForm.status === 'VALID') {
      this.clienteServices.guardar(this.clienteForm.value).subscribe(
        (response) => {
          if (response) {
            this.errores = false;
            this.exito = true;
          } else {
            this.errores = true;
            this.exito = false;
          }
        },
        error => {
          console.log(error);
          this.nombreExepcion = error.error.nombreExcepcion;
          this.mensaje = error.error.mensaje;
          this.errores = true;
          this.exito = false;
        }
      );
    } else {
      this.nombreExepcion = 'Error';
      this.mensaje = 'Verifique los campos';
      this.errores = true;
      this.exito = false;
    }
  }

  private construirFormularioCliente() {
    this.clienteForm = new FormGroup({
      identificacion: new FormControl('', [Validators.required]),
      nombre: new FormControl('', [Validators.required,
      Validators.minLength(LONGITUD_MINIMA_PERMITIDA_TEXTO), Validators.maxLength(LONGITUD_MAXIMA_PERMITIDA_TEXTO)]),
      direccion: new FormControl('', [Validators.required,
      Validators.minLength(LONGITUD_MINIMA_PERMITIDA_TEXTO), Validators.maxLength(LONGITUD_MAXIMA_PERMITIDA_TEXTO)]),
      telefono: new FormControl('', [Validators.required])
    });
  }

}
