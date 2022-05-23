import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MascotaService } from '@mascota/shared/service/mascota.service';
import { Mascota } from '@mascota/shared/model/mascota';

@Component({
  selector: 'app-borrar-mascota',
  templateUrl: './borrar-mascota.component.html',
  styleUrls: ['./borrar-mascota.component.scss']
})
export class BorrarMascotaComponent implements OnInit {

  public listarMascotas: Observable<Mascota[]>;
  constructor(protected mascotaService: MascotaService) { }

  public exito = false;
  public errores = false;

  ngOnInit() {
    this.listarMascotas = this.mascotaService.consultar();
  }

  borrarMascota(mascota: any) {
    console.log(mascota);
    this.mascotaService.eliminar(mascota).subscribe(
      (response) => {
        console.log(response);
        this.exito = true;
        this.listarMascotas = this.mascotaService.consultar();
      },
      error => {
        this.errores = true;
        console.log(error);
      }
    );
  }

}
