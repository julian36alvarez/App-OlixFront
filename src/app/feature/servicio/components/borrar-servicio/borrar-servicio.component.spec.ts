import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarServicioComponent } from './borrar-servicio.component';

describe('BorrarServicioComponent', () => {
  let component: BorrarServicioComponent;
  let fixture: ComponentFixture<BorrarServicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrarServicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrarServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
