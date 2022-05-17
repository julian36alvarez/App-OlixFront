import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ServicioService } from '@servicio/shared/service/servicio.service';
import { Servicio } from '@servicio/shared/model/servicio';

@Component({
  selector: 'app-borrar-servicio',
  templateUrl: './borrar-servicio.component.html',
  styleUrls: ['./borrar-servicio.component.scss']
})
export class BorrarServicioComponent implements OnInit {

  public listarServicios: Observable<Servicio[]>;
  constructor(protected servicioService: ServicioService) { }

  ngOnInit() {
    this.listarServicios = this.servicioService.consultar();
  }

  borrarServicio(servicio: any) {
    console.log(servicio);
    this.servicioService.eliminar(servicio).subscribe(
      (response) =>{
        console.log(response)
        this.listarServicios = this.servicioService.consultar();
      },
      error => {
        console.log(error)
      }

    )
  }

}
