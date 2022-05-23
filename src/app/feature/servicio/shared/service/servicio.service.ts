import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
import { Servicio } from '../model/servicio';


@Injectable()
export class ServicioService {

  constructor(protected http: HttpService) {}

  public consultar() {
    return this.http.doGet<Servicio[]>(`${environment.endpoint}/servicios`, this.http.optsName('consultar servicios'));
  }

  public guardar(servicio: Servicio) {
    return this.http.doPost<Servicio, Servicio[]>(`${environment.endpoint}/servicios`, servicio,
                                                this.http.optsName('crear/actualizar servicios'));
  }

  public eliminar(servicio: Servicio) {
    return this.http.doDelete<boolean>(`${environment.endpoint}/servicios/${servicio.id}`,
                                                 this.http.optsName('eliminar servicio'));
  }
}
