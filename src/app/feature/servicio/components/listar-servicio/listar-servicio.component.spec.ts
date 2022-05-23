import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { ListarServicioComponent } from './listar-servicio.component';
import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ServicioService } from '../../shared/service/servicio.service';
import { Servicio } from '../../shared/model/servicio';
import { HttpService } from 'src/app/core/services/http.service';

describe('ListarServicioComponent', () => {
  let component: ListarServicioComponent;
  let fixture: ComponentFixture<ListarServicioComponent>;
  let servicioService: ServicioService;
  const listaServicios: Servicio[] = [new Servicio('1', '1', '1', '10/10/2021'), new Servicio('2', '1', '1', '10/10/2021')];

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ListarServicioComponent],
      imports: [
        CommonModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [ServicioService, HttpService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarServicioComponent);
    component = fixture.componentInstance;
    servicioService = TestBed.inject(ServicioService);
    spyOn(servicioService, 'consultar').and.returnValue(
      of(listaServicios)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    component.listarServicios.subscribe(resultado => {
      expect(2).toBe(resultado.length);
    });
  });

});
