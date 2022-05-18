import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { BorrarClienteComponent } from './borrar-cliente.component';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { ClienteService } from '../../shared/service/cliente.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpService } from 'src/app/core/services/http.service';
import { Cliente } from '@cliente/shared/model/cliente';
import { ListarClienteComponent } from '../listar-cliente/listar-cliente.component';

describe('BorrarClienteComponent', () => {
  let component: BorrarClienteComponent;
  let fixture: ComponentFixture<BorrarClienteComponent>;
  let clienteService: ClienteService;
  const listaClientes: Cliente[] = [new Cliente('1', '1655', 'Pruebas', 'Cll 123', '789456'), new Cliente('2', '2655', 'Pruebas', 'Cll 123', '789456')];

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarClienteComponent, BorrarClienteComponent ],
      imports: [
        CommonModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [ClienteService, HttpService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrarClienteComponent);
    component = fixture.componentInstance;
    clienteService = TestBed.inject(ClienteService);
    spyOn(clienteService, 'consultar').and.returnValue(
      of(listaClientes)
    );
    spyOn(clienteService, 'eliminar').and.returnValue(
      of(true)
     );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
