import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ServicioService } from './servicio.service';
import { environment } from 'src/environments/environment';
import { HttpService } from 'src/app/core/services/http.service';
import { Servicio } from '../model/servicio';
import { HttpResponse } from '@angular/common/http';

describe('ServicioService', () => {
  let httpMock: HttpTestingController;
  let service: ServicioService;
  const apiEndpointServicioConsulta = `${environment.endpoint}/servicios`;
  const apiEndpointServicios = `${environment.endpoint}/servicios`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ServicioService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(ServicioService);
  });

  it('should be created', () => {
    const productService: ServicioService = TestBed.inject(ServicioService);
    expect(productService).toBeTruthy();
  });

  it('deberia listar servicios', () => {
    const dummyServicios = [
      new Servicio('1', '2', '2', '2','18/05/2022','23'), new Servicio('2', '2', '2', '2','18/05/2022','23')
    ];
    service.consultar().subscribe(servicios => {
      expect(servicios.length).toBe(2);
      expect(servicios).toEqual(dummyServicios);
    });
    const req = httpMock.expectOne(apiEndpointServicioConsulta);
    expect(req.request.method).toBe('GET');
    req.flush(dummyServicios);
  });

  it('deberia crear un servicio', () => {
    const dummyServicio = new Servicio('1', '2', '2', '2','18/05/2022','23');
    service.guardar(dummyServicio).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(apiEndpointServicios);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<boolean>({body: true}));
  });

  it('deberia eliminar un servicio', () => {
    const dummyServicio = new Servicio('1', '2', '2', '2','18/05/2022','23');
    service.eliminar(dummyServicio).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(`${apiEndpointServicios}/1`);
    expect(req.request.method).toBe('DELETE');
    req.event(new HttpResponse<boolean>({body: true}));
  });
});
