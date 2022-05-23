import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ClienteService } from '@cliente/shared/service/cliente.service';
import { Cliente } from '@cliente/shared/model/cliente';

@Component({
  selector: 'app-borrar-cliente',
  templateUrl: './borrar-cliente.component.html',
  styleUrls: ['./borrar-cliente.component.scss']
})
export class BorrarClienteComponent implements OnInit {

  public listarClientes: Observable<Cliente[]>;
  constructor(protected clienteService: ClienteService) { }

  public exito = false;
  public errores = false;

  ngOnInit() {
    this.listarClientes = this.clienteService.consultar();
  }

  borrarCliente(cliente: any) {
    this.clienteService.eliminar(cliente).subscribe(
      (response) => {
        this.exito = true;
        this.listarClientes = this.clienteService.consultar();
        console.log(response);
      },
      error => {
        this.errores = true;
        console.log(error);
      }
    );
  }

}
