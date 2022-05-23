import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ServicioService } from '@servicio/shared/service/servicio.service';
import { Servicio } from '@servicio/shared/model/servicio';

@Component({
  selector: 'app-listar-servicio',
  templateUrl: './listar-servicio.component.html',
  styleUrls: ['./listar-servicio.component.scss']
})
export class ListarServicioComponent implements OnInit {
  public listarServicios: Observable<Servicio[]>;
  constructor(protected servicioService: ServicioService) { }

  ngOnInit() {
    this.listarServicios = this.servicioService.consultar();
  }
}
