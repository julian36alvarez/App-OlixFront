import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearClienteComponent } from './crear-cliente.component';
import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ClienteService } from '../../shared/service/cliente.service';
import { HttpService } from 'src/app/core/services/http.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { of, throwError } from 'rxjs';



describe('CrearClienteComponent', () => {
  let component: CrearClienteComponent;
  let fixture: ComponentFixture<CrearClienteComponent>;
  let clienteService: ClienteService;


  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CrearClienteComponent],
      imports: [
        CommonModule,
        HttpClientTestingModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [ClienteService, HttpService],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearClienteComponent);
    component = fixture.componentInstance;
    clienteService = TestBed.inject(ClienteService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('formulario es invalido cuando esta vacio', () => {
    expect(component.clienteForm.valid).toBeFalsy();
  });

  it('Registrando cliente', () => {
    expect(component.clienteForm.valid).toBeFalsy();
    component.clienteForm.controls.identificacion.setValue(1235456);
    component.clienteForm.controls.nombre.setValue('Cliente test');
    component.clienteForm.controls.direccion.setValue('Cll 123');
    component.clienteForm.controls.telefono.setValue(12345678);
    spyOn(clienteService, 'guardar').and.returnValue(
      of(true)
    );
    expect(component.clienteForm.valid).toBeTruthy();
    component.crearCliente();
    expect(component.exito).toBeTruthy();
  });

  it('deberia mostar error Registrando cliente formulario', () => {
    expect(component.clienteForm.valid).toBeFalsy();
    component.clienteForm.controls.identificacion.setValue(1235456);
    component.clienteForm.controls.nombre.setValue('Cliente test');
    component.clienteForm.controls.direccion.setValue('Cll 123');
    expect(component.clienteForm.valid).toBeFalsy();
    component.crearCliente();
    expect(component.errores).toBeTruthy();
    expect(component.nombreExepcion).toBe('Error');
    expect(component.mensaje).toBe('Verifique los campos');
  });

  it('deberia mostar error Registrando cliente response', () => {
    expect(component.clienteForm.valid).toBeFalsy();
    component.clienteForm.controls.identificacion.setValue(1235456);
    component.clienteForm.controls.nombre.setValue('Cliente test');
    component.clienteForm.controls.direccion.setValue('Cll 123');
    component.clienteForm.controls.telefono.setValue(12345678);
    expect(component.clienteForm.valid).toBeTruthy();
    spyOn(clienteService, 'guardar').and.returnValue(
      of(false)
    );
    component.crearCliente();
    expect(component.errores).toBeTruthy();
  });

  it('deberia mostar error Registrando ExcepcionDuplicidad', () => {
    expect(component.clienteForm.valid).toBeFalsy();
    component.clienteForm.controls.identificacion.setValue(1235456);
    component.clienteForm.controls.nombre.setValue('Cliente test');
    component.clienteForm.controls.direccion.setValue('Cll 123');
    component.clienteForm.controls.telefono.setValue(12345678);
    expect(component.clienteForm.valid).toBeTruthy();
    spyOn(clienteService, 'guardar').and.returnValue(
      throwError({ error: { nombreExcepcion: 'ExcepcionDuplicidad', mensaje: 'El usuario ya existe en el sistema' } })
    );
    component.crearCliente();
    expect(component.errores).toBeTruthy();
    expect(component.nombreExepcion).toBe('ExcepcionDuplicidad');
    expect(component.mensaje).toBe('El usuario ya existe en el sistema');
  });

});
