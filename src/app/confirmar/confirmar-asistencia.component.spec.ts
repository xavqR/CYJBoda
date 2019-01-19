import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmarAsistenciaComponent } from './confirmar-asistencia.component';

describe('ConfirmarAsistenciaComponent', () => {
  let component: ConfirmarAsistenciaComponent;
  let fixture: ComponentFixture<ConfirmarAsistenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmarAsistenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmarAsistenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
