import { Component, OnInit } from '@angular/core';
import { MascotaService } from '../../shared/service/mascota.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Mascota } from '../../shared/model/mascota';

const LONGITUD_MINIMA_PERMITIDA_TEXTO = 3;
const LONGITUD_MAXIMA_PERMITIDA_TEXTO = 20;

@Component({
  selector: 'app-crear-mascota',
  templateUrl: './crear-mascota.component.html',
  styleUrls: ['./crear-mascota.component.scss']
})
export class CrearMascotaComponent implements OnInit {
  mascotaForm: FormGroup;
  constructor(protected mascotaServices: MascotaService) { }

  public mascota : Mascota = new Mascota();
  public exito = false;
  public errores = false;
  public nombreExepcion = '';
  public mensaje = '';
  ngOnInit() {
    this.construirFormularioMascota();
  }

  crearMascota() {
    console.log('Click');
    if(this.mascotaForm.status == 'VALID'){
    this.mascotaServices.guardar(this.mascotaForm.value).subscribe(
      (response) =>{
        if(response['valor']>0){
          this.errores =false;
          this.exito =true;
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
    );
    }else{
        this.nombreExepcion = "Error";
        this.mensaje = "Verifique los campos";
        this.errores =true;
        this.exito =false;
    }
  }

  private construirFormularioMascota() {
    this.mascotaForm = new FormGroup({
      idCliente: new FormControl('', [Validators.required]),
      nombre: new FormControl('', [Validators.required, Validators.minLength(LONGITUD_MINIMA_PERMITIDA_TEXTO), Validators.maxLength(LONGITUD_MAXIMA_PERMITIDA_TEXTO)]),
      raza: new FormControl('', [Validators.required, Validators.minLength(LONGITUD_MINIMA_PERMITIDA_TEXTO), Validators.maxLength(LONGITUD_MAXIMA_PERMITIDA_TEXTO)]),
      especie: new FormControl('', [Validators.required, Validators.minLength(LONGITUD_MINIMA_PERMITIDA_TEXTO), Validators.maxLength(LONGITUD_MAXIMA_PERMITIDA_TEXTO)])
    });
  }

}
