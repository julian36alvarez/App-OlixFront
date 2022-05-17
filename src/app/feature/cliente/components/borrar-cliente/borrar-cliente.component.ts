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

  ngOnInit() {
    this.listarClientes = this.clienteService.consultar();
  }

  borrarCliente(cliente: any) {
    console.log(cliente);
    this.clienteService.eliminar(cliente).subscribe(
      (response) =>{
        console.log(response)
        this.listarClientes = this.clienteService.consultar();
      },
      error => {
        console.log(error)
      }

    )
  }

}
