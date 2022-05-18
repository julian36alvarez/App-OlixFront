import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { CrearServicioComponent } from './crear-servicio.component';
import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ServicioService } from '../../shared/service/servicio.service';
import { HttpService } from 'src/app/core/services/http.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

describe('CrearServicioComponent', () => {
  let component: CrearServicioComponent;
  let fixture: ComponentFixture<CrearServicioComponent>;
  let servicioService: ServicioService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearServicioComponent ],
      imports: [
        CommonModule,
        HttpClientTestingModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [ServicioService, HttpService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearServicioComponent);
    component = fixture.componentInstance;
    servicioService = TestBed.inject(ServicioService);
    spyOn(servicioService, 'guardar').and.returnValue(
     of(true)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('formulario es invalido cuando esta vacio', () => {
    expect(component.servicioForm.valid).toBeFalsy();
  });

  it('Registrando servicio', () => {

    expect(component.servicioForm.valid).toBeFalsy();
    component.servicioForm.controls.tipoUsuario.setValue(1);
    component.servicioForm.controls.tipoServicio.setValue(1);
    component.servicioForm.controls.idMascota.setValue(1);
    component.servicioForm.controls.idUsuario.setValue(1);
    component.servicioForm.controls.horaProgramada.setValue('10:00');
    component.servicioForm.controls.fechaProgramada.setValue('18/05/2022');
    expect(component.servicioForm.valid).toBeTruthy();

    component.crearServicio();

    // Aca validamos el resultado esperado al enviar la petición
    // TODO adicionar expect
  });
});
