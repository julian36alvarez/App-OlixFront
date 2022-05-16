import { NgModule } from '@angular/core';

import { ServicioRoutingModule } from './servicio-routing.module';
import { BorrarServicioComponent } from './components/borrar-servicio/borrar-servicio.component';
import { ListarServicioComponent } from './components/listar-servicio/listar-servicio.component';
import { CrearServicioComponent } from './components/crear-servicio/crear-servicio.component';
import { ServicioComponent } from './components/servicio/servicio.component';
import { SharedModule } from '@shared/shared.module';
import { ServicioService } from './shared/service/servicio.service';


@NgModule({
  declarations: [
    CrearServicioComponent,
    ListarServicioComponent,
    BorrarServicioComponent,
    ServicioComponent
  ],
  imports: [
    ServicioRoutingModule,
    SharedModule
  ],
  providers: [ServicioService]
})
export class ServicioModule { }
