import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { BorrarServicioComponent } from './borrar-servicio.component';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { ServicioService } from '../../shared/service/servicio.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpService } from 'src/app/core/services/http.service';
import { Servicio } from '@servicio/shared/model/servicio';

describe('BorrarServicioComponent', () => {
  let component: BorrarServicioComponent;
  let fixture: ComponentFixture<BorrarServicioComponent>;
  let servicioService: ServicioService;
  const listaServicios: Servicio[] = [ new Servicio('1', '1', '1', '10/10/2021'), new Servicio('2', '1', '1', '10/10/2021') ];

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [BorrarServicioComponent],
      imports: [
        CommonModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [ServicioService, HttpService],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrarServicioComponent);
    component = fixture.componentInstance;
    servicioService = TestBed.inject(ServicioService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('eliminar servicio', () => {
    spyOn(servicioService, 'eliminar').and.returnValue(
      of(true)
    );
    component.borrarServicio(listaServicios[0]);
    expect(component.exito).toBeTruthy();
  });

  it('deberia mostrar error al eliminar servicio', () => {
    spyOn(servicioService, 'eliminar').and.returnValue(
      throwError('Error')
    );
    component.borrarServicio(listaServicios[0]);
    expect(component.errores).toBeTruthy();
  });

});
