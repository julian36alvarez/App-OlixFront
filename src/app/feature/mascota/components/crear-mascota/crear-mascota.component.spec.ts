import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { CrearMascotaComponent } from './crear-mascota.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { MascotaService } from '../../shared/service/mascota.service';
import { HttpService } from 'src/app/core/services/http.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

describe('CrearMascotaComponent', () => {
  let component: CrearMascotaComponent;
  let fixture: ComponentFixture<CrearMascotaComponent>;
  let mascotaService: MascotaService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearMascotaComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [MascotaService, HttpService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearMascotaComponent);
    component = fixture.componentInstance;
    mascotaService = TestBed.inject(MascotaService);
    spyOn(mascotaService, 'guardar').and.returnValue(
     of(true)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('formulario es invalido cuando esta vacio', () => {
    expect(component.mascotaForm.valid).toBeFalsy();
  });

  it('Registrando mascota', () => {
    expect(component.mascotaForm.valid).toBeFalsy();
    component.mascotaForm.controls.idCliente.setValue(1235456);
    component.mascotaForm.controls.nombre.setValue('Mascota test');
    component.mascotaForm.controls.raza.setValue('Criollo');
    component.mascotaForm.controls.especie.setValue('PERRO');
    expect(component.mascotaForm.valid).toBeTruthy();

    component.crearMascota();

    // Aca validamos el resultado esperado al enviar la petición
    // TODO adicionar expect
  });
});
