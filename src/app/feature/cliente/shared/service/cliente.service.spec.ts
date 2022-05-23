import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ClienteService } from './cliente.service';
import { environment } from 'src/environments/environment';
import { HttpService } from 'src/app/core/services/http.service';
import { Cliente } from '../model/cliente';
import { HttpResponse } from '@angular/common/http';

describe('ClienteService', () => {
  let httpMock: HttpTestingController;
  let service: ClienteService;
  const apiEndpointClienteConsulta = `${environment.endpoint}/clientes`;
  const apiEndpointClientes = `${environment.endpoint}/clientes`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ClienteService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(ClienteService);
  });

  it('should be created', () => {
    const productService: ClienteService = TestBed.inject(ClienteService);
    expect(productService).toBeTruthy();
  });

  it('deberia listar clientes', () => {
    const dummyClientes = [
      new Cliente('1', '1232456', 'preubas', 'cl 123', '4654987'), new Cliente('2', '1232456', 'preubas', 'cl 123', '4654987')
    ];
    service.consultar().subscribe(clientes => {
      expect(clientes.length).toBe(2);
      expect(clientes).toEqual(dummyClientes);
    });
    const req = httpMock.expectOne(apiEndpointClienteConsulta);
    expect(req.request.method).toBe('GET');
    req.flush(dummyClientes);
  });

  it('deberia crear un cliente', () => {
    const dummyCliente = new Cliente('1', '1232456', 'preubas', 'cl 123', '4654987');
    service.guardar(dummyCliente).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(apiEndpointClientes);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<boolean>({ body: true }));
  });

  it('deberia eliminar un cliente', () => {
    const dummyCliente = new Cliente('1', '1232456', 'preubas', 'cl 123', '4654987');
    service.eliminar(dummyCliente).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(`${apiEndpointClientes}/1`);
    expect(req.request.method).toBe('DELETE');
    req.event(new HttpResponse<boolean>({ body: true }));
  });
});
