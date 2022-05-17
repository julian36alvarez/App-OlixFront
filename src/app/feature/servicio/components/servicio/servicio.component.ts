import { Component, OnInit } from '@angular/core';
import { ClienteService } from '@cliente/shared/service/cliente.service';

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.scss']
})
export class ServicioComponent implements OnInit {

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
