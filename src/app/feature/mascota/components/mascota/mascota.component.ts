import { Component, OnInit } from '@angular/core';
import { ClienteService } from '@cliente/shared/service/cliente.service';

@Component({
  selector: 'app-mascota',
  templateUrl: './mascota.component.html',
  styleUrls: ['./mascota.component.scss']
})
export class MascotaComponent implements OnInit {

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
