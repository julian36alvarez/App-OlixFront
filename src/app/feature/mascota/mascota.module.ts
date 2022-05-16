import { NgModule } from '@angular/core';

import { MascotaRoutingModule } from './mascota-routing.module';
import { BorrarMascotaComponent } from './components/borrar-mascota/borrar-mascota.component';
import { ListarMascotaComponent } from './components/listar-mascota/listar-mascota.component';
import { CrearMascotaComponent } from './components/crear-mascota/crear-mascota.component';
import { MascotaComponent } from './components/mascota/mascota.component';
import { SharedModule } from '@shared/shared.module';
import { MascotaService } from './shared/service/mascota.service';


@NgModule({
  declarations: [
    CrearMascotaComponent,
    ListarMascotaComponent,
    BorrarMascotaComponent,
    MascotaComponent
  ],
  imports: [
    MascotaRoutingModule,
    SharedModule
  ],
  providers: [MascotaService]
})
export class MascotaModule { }
