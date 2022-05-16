import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearServicioComponent } from './components/crear-servicio/crear-servicio.component';
import { ListarServicioComponent } from './components/listar-servicio/listar-servicio.component';
import { BorrarServicioComponent } from './components/borrar-servicio/borrar-servicio.component';
import { ServicioComponent } from './components/servicio/servicio.component';


const routes: Routes = [
  {
    path: '',
    component: ServicioComponent,
    children: [
      {
        path: 'crear',
        component: CrearServicioComponent
      },
      {
        path: 'listar',
        component: ListarServicioComponent
      },
      {
        path: 'borrar',
        component: BorrarServicioComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicioRoutingModule { }
