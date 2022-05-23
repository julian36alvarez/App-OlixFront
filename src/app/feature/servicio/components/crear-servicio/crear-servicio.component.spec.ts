import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { CrearServicioComponent } from './crear-servicio.component';
import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ServicioService } from '../../shared/service/servicio.service';
import { HttpService } from 'src/app/core/services/http.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Servicio } from '@servicio/shared/model/servicio';

describe('CrearServicioComponent', () => {
  let component: CrearServicioComponent;
  let fixture: ComponentFixture<CrearServicioComponent>;
  let servicioService: ServicioService;


  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CrearServicioComponent],
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
    spyOn(servicioService, 'guardar').and.returnValue(of([new Servicio('1', '1', '1', '1', '18/05/2023', '1', '18/05/2023', '18/05/2023', '45000.0')]));
    component.servicioForm.controls.tipoUsuario.setValue(1);
    component.servicioForm.controls.tipoServicio.setValue(1);
    component.servicioForm.controls.idMascota.setValue(1);
    component.servicioForm.controls.idUsuario.setValue(1);
    component.servicioForm.controls.horaProgramada.setValue('10:00');
    component.servicioForm.controls.fechaProgramada.setValue('18/05/2023');
    expect(component.servicioForm.valid).toBeTruthy();
    component.crearServicio();
    expect(component.exito).toBeTruthy();
  });

  it('deberia mostar error Registrando servicio formulario', () => {
    expect(component.servicioForm.valid).toBeFalsy();
    component.servicioForm.controls.tipoUsuario.setValue(1);
    component.servicioForm.controls.tipoServicio.setValue(1);
    component.servicioForm.controls.idMascota.setValue(1);
    component.servicioForm.controls.idUsuario.setValue(1);
    component.servicioForm.controls.horaProgramada.setValue('10:00');
    expect(component.servicioForm.valid).toBeFalsy();
    component.crearServicio();
    expect(component.errores).toBeTruthy();
    expect(component.nombreExepcion).toBe('Error');
    expect(component.mensaje).toBe('Verifique los campos');
  });



  it('deberia mostar error Registrando ExcepcionValorInvalido', () => {
    expect(component.servicioForm.valid).toBeFalsy();
    component.servicioForm.controls.tipoUsuario.setValue(1);
    component.servicioForm.controls.tipoServicio.setValue(654);
    component.servicioForm.controls.idMascota.setValue(1);
    component.servicioForm.controls.idUsuario.setValue(1);
    component.servicioForm.controls.horaProgramada.setValue('10:00');
    component.servicioForm.controls.fechaProgramada.setValue('18/05/2023');
    expect(component.servicioForm.valid).toBeTruthy();
    spyOn(servicioService, 'guardar').and.returnValue(
      throwError({ error: { nombreExcepcion: 'ExcepcionValorInvalido', mensaje: 'Se debe ingresar el tipo servicio correcto' } })
    );
    component.crearServicio();
    expect(component.errores).toBeTruthy();
    expect(component.nombreExepcion).toBe('ExcepcionValorInvalido');
    expect(component.mensaje).toBe('Se debe ingresar el tipo servicio correcto');
  });


});
