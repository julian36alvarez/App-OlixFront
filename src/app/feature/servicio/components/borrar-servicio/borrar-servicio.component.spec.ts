import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { BorrarServicioComponent } from './borrar-servicio.component';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { ServicioService } from '../../shared/service/servicio.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from 'src/app/core/services/http.service';

describe('BorrarServicioComponent', () => {
  let component: BorrarServicioComponent;
  let fixture: ComponentFixture<BorrarServicioComponent>;
  let servicioService: ServicioService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BorrarServicioComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [ServicioService, HttpService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrarServicioComponent);
    component = fixture.componentInstance;
    servicioService = TestBed.inject(ServicioService);
    spyOn(servicioService, 'eliminar').and.returnValue(
      of(true)
     );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
