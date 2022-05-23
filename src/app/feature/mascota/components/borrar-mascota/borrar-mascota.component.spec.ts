import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { BorrarMascotaComponent } from './borrar-mascota.component';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { MascotaService } from '../../shared/service/mascota.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from 'src/app/core/services/http.service';
import { Mascota } from '@mascota/shared/model/mascota';

describe('BorrarMascotaComponent', () => {
  let component: BorrarMascotaComponent;
  let fixture: ComponentFixture<BorrarMascotaComponent>;
  let mascotaService: MascotaService;
  const listaMascotas: Mascota[] = [new Mascota('1', 'Mascota 1', 'PERRO', 'CRIOLLO', '12'), new Mascota('2', 'Mascota 2', 'PERRO', 'CRIOLLO', '12')];

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [BorrarMascotaComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [MascotaService, HttpService],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrarMascotaComponent);
    component = fixture.componentInstance;
    mascotaService = TestBed.inject(MascotaService);
    fixture.detectChanges();
  });

  it('eliminar mascota', () => {
    spyOn(mascotaService, 'eliminar').and.returnValue(
      of(true)
    );
    component.borrarMascota(listaMascotas[0]);
    expect(component.exito).toBeTruthy();
  });

  it('deberia mostrar error al eliminar mascota', () => {
    spyOn(mascotaService, 'eliminar').and.returnValue(
      throwError('Error')
    );
    component.borrarMascota(listaMascotas[0]);
    expect(component.errores).toBeTruthy();
  });

});
