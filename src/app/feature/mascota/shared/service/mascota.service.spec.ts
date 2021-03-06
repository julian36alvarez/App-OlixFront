import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { MascotaService } from './mascota.service';
import { environment } from 'src/environments/environment';
import { HttpService } from 'src/app/core/services/http.service';
import { Mascota } from '../model/mascota';
import { HttpResponse } from '@angular/common/http';

describe('MascotaService', () => {
  let httpMock: HttpTestingController;
  let service: MascotaService;
  const apiEndpointMascotaConsulta = `${environment.endpoint}/mascotas`;
  const apiEndpointMascotas = `${environment.endpoint}/mascotas`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MascotaService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(MascotaService);
  });

  it('should be created', () => {
    const productService: MascotaService = TestBed.inject(MascotaService);
    expect(productService).toBeTruthy();
  });

  it('deberia listar mascotas', () => {
    const dummyMascotas = [
      new Mascota('1', 'Mascota 1'), new Mascota('2', 'Mascota 2')
    ];
    service.consultar().subscribe(mascotas => {
      expect(mascotas.length).toBe(2);
      expect(mascotas).toEqual(dummyMascotas);
    });
    const req = httpMock.expectOne(apiEndpointMascotaConsulta);
    expect(req.request.method).toBe('GET');
    req.flush(dummyMascotas);
  });

  it('deberia crear un mascota', () => {
    const dummyMascota = new Mascota('1', 'Mascota 1');
    service.guardar(dummyMascota).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(apiEndpointMascotas);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<boolean>({body: true}));
  });

  it('deberia eliminar un mascota', () => {
    const dummyMascota = new Mascota('1', 'Mascota 1');
    service.eliminar(dummyMascota).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(`${apiEndpointMascotas}/1`);
    expect(req.request.method).toBe('DELETE');
    req.event(new HttpResponse<boolean>({body: true}));
  });
});
