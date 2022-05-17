import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
import { Cliente } from '../model/cliente';


@Injectable()
export class ClienteService {

  constructor(protected http: HttpService) {}

  public consultar() {
    return this.http.doGet<Cliente[]>(`${environment.endpoint}/clientes`, this.http.optsName('consultar clientes'));
  }

  public guardar(cliente: Cliente) {
    return this.http.doPost<Cliente, number>(`${environment.endpoint}/clientes`, cliente,
                                                this.http.optsName('crear/actualizar clientes'));
  }

  public eliminar(cliente: Cliente) {
    return this.http.doDelete<boolean>(`${environment.endpoint}/clientes/${cliente.id}`,
                                                 this.http.optsName('eliminar clientes'));
  }

  public trm(){
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    var daten = yyyy + '-' + mm + '-' + dd;
    return this.http.doGet('https://www.datos.gov.co/resource/32sa-8pi3.json?vigenciadesde='+daten);
  }


}
