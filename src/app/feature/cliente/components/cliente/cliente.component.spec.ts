import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ClienteComponent } from './cliente.component';
import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ClienteService } from '../../shared/service/cliente.service';
import { HttpService } from 'src/app/core/services/http.service';


describe('ClienteComponent', () => {
  let component: ClienteComponent;
  let fixture: ComponentFixture<ClienteComponent>;
  let clienteService: ClienteService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteComponent ],
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
    fixture = TestBed.createComponent(ClienteComponent);
    component = fixture.componentInstance;
    clienteService = TestBed.inject(ClienteService);
    spyOn(clienteService, 'trm').and.returnValue(
      of()
     );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
