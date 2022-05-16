import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearMascotaComponent } from './components/crear-mascota/crear-mascota.component';
import { ListarMascotaComponent } from './components/listar-mascota/listar-mascota.component';
import { BorrarMascotaComponent } from './components/borrar-mascota/borrar-mascota.component';
import { MascotaComponent } from './components/mascota/mascota.component';


const routes: Routes = [
  {
    path: '',
    component: MascotaComponent,
    children: [
      {
        path: 'crear',
        component: CrearMascotaComponent
      },
      {
        path: 'listar',
        component: ListarMascotaComponent
      },
      {
        path: 'borrar',
        component: BorrarMascotaComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MascotaRoutingModule { }
