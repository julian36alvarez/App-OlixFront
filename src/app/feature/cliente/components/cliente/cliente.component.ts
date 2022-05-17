import { Component, OnInit } from '@angular/core';
import { ClienteService } from '@cliente/shared/service/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

  public trmValue = '';

  constructor(protected clienteService: ClienteService) { }

  ngOnInit() {
    this.clienteService.trm().subscribe(

      (response) => {
        this.trmValue = response[0].valor;
      }
    );

  }

}
