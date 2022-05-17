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

  ngOnInit() {
    this.listarMascotas = this.mascotaService.consultar();
  }

  borrarMascota(mascota: any) {
    console.log(mascota);
    this.mascotaService.eliminar(mascota).subscribe(
      (response) =>{
        console.log(response)
        this.listarMascotas = this.mascotaService.consultar();
      },
      error => {
        console.log(error)
      }

    )
  }

}
