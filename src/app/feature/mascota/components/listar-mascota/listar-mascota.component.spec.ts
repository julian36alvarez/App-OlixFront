import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { ListarMascotaComponent } from './listar-mascota.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { MascotaService } from '../../shared/service/mascota.service';
import { Mascota } from '../../shared/model/mascota';
import { HttpService } from 'src/app/core/services/http.service';

describe('ListarMascotaComponent', () => {
  let component: ListarMascotaComponent;
  let fixture: ComponentFixture<ListarMascotaComponent>;
  let mascotaService: MascotaService;
  const listaMascotas: Mascota[] = [new Mascota('1', 'Mascota 1', 'PERRO', 'CRIOLLO', '12'), new Mascota('2', 'Mascota 2', 'PERRO', 'CRIOLLO', '12')];

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ListarMascotaComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [MascotaService, HttpService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarMascotaComponent);
    component = fixture.componentInstance;
    mascotaService = TestBed.inject(MascotaService);
    spyOn(mascotaService, 'consultar').and.returnValue(
      of(listaMascotas)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    component.listarMascotas.subscribe(resultado => {
      expect(2).toBe(resultado.length);
    });
  });

});
