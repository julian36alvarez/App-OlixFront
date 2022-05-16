import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
import { Mascota } from '../model/mascota';


@Injectable()
export class MascotaService {

  constructor(protected http: HttpService) {}

  public consultar() {
    return this.http.doGet<Mascota[]>(`${environment.endpoint}/mascotas`, this.http.optsName('consultar mascotas'));
  }

  public guardar(mascota: Mascota) {
    return this.http.doPost<Mascota, boolean>(`${environment.endpoint}/mascotas`, mascota,
                                                this.http.optsName('crear/actualizar servicios'));
  }

  public eliminar(mascota: Mascota) {
    return this.http.doDelete<boolean>(`${environment.endpoint}/mascotas/${mascota.id}`,
                                                 this.http.optsName('eliminar servicio'));
  }
}
