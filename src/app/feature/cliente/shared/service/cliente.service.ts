import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
import { Cliente } from '../model/cliente';
import { TRM } from '../model/trm';


@Injectable()
export class ClienteService {

  constructor(protected http: HttpService) { }

  public consultar() {
    return this.http.doGet<Cliente[]>(`${environment.endpoint}/clientes`, this.http.optsName('consultar clientes'));
  }

  public guardar(cliente: Cliente) {
    return this.http.doPost<Cliente, boolean>(`${environment.endpoint}/clientes`, cliente,
      this.http.optsName('crear clientes'));
  }

  public eliminar(cliente: Cliente) {
    return this.http.doDelete<boolean>(`${environment.endpoint}/clientes/${cliente.id}`,
      this.http.optsName('eliminar clientes'));
  }

  public trm(fecha: string) {
    return this.http.doGet<TRM[]>('https://www.datos.gov.co/resource/32sa-8pi3.json?vigenciahasta=' + fecha);
  }


}
