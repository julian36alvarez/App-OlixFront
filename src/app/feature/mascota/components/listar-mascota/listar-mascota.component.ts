import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MascotaService } from '@mascota/shared/service/mascota.service';
import { Mascota } from '@mascota/shared/model/mascota';

@Component({
  selector: 'app-listar-mascota',
  templateUrl: './listar-mascota.component.html',
  styleUrls: ['./listar-mascota.component.scss']
})
export class ListarMascotaComponent implements OnInit {
  public listarMascotas: Observable<Mascota[]>;
  constructor(protected mascotaService: MascotaService) { }

  ngOnInit() {
    this.listarMascotas = this.mascotaService.consultar();
  }

}
