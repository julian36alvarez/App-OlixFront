import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../shared/service/servicio.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Servicio } from '../../shared/model/servicio';



@Component({
  selector: 'app-crear-servicio',
  templateUrl: './crear-servicio.component.html',
  styleUrls: ['./crear-servicio.component.scss']
})
export class CrearServicioComponent implements OnInit {
  servicioForm: FormGroup;
  constructor(protected servicioServices: ServicioService) { }

  public servicio : Servicio = new Servicio();
  public exito = false;
  public errores = false;
  public nombreExepcion = '';
  public mensaje = '';
  public id = '';
  public fechaContable = '';
  public fechaEntrega = '';
  public fechaProgramada = '';
  public total = '';

  ngOnInit() {
    this.construirFormularioServicio();
  }

  crearServicio() {
    console.log('Click');
    this.servicioServices.guardar(this.servicioForm.value).subscribe(
      (response) =>{
        console.log(response[0].id)
        if(response[0].id > 0){
          this.errores =false;
          this.exito =true;
          this.id = response[0].id;
          this.fechaContable = response[0].fechaContable;
          this.fechaEntrega = response[0].fechaEntrega;
          this.fechaProgramada = response[0].fechaProgramada;
          this.total = response[0].total;
        }else{
          this.errores =true;
          this.exito =false;
        }
      },
      error => {
        console.log(error)
        this.nombreExepcion = error.error.nombreExcepcion;
        this.mensaje = error.error.mensaje;
        this.errores =true;
        this.exito =false;

      }

    )
  }


  private construirFormularioServicio() {
    this.servicioForm = new FormGroup({
      tipoUsuario: new FormControl('', [Validators.required]),
      tipoServicio: new FormControl('', [Validators.required]),
      idMascota: new FormControl('', [Validators.required]),
      idUsuario: new FormControl('', [Validators.required]),
      fechaProgramada: new FormControl('', [Validators.required])
    });
  }

}