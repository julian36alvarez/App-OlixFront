import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { BorrarMascotaComponent } from './borrar-mascota.component';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { MascotaService } from '../../shared/service/mascota.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from 'src/app/core/services/http.service';

describe('BorrarMascotaComponent', () => {
  let component: BorrarMascotaComponent;
  let fixture: ComponentFixture<BorrarMascotaComponent>;
  let mascotaService: MascotaService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BorrarMascotaComponent ],
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
    spyOn(mascotaService, 'eliminar').and.returnValue(
      of(true)
     );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('eliminar mascota', () => {
    expect(component.borrarMascota(0)).toBeDefined;
  });
});
