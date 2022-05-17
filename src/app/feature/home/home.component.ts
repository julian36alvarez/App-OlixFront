import { Component, OnInit } from '@angular/core';
import { ClienteService } from '@cliente/shared/service/cliente.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


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
