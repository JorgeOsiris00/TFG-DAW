import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaEditarAlumnoComponent } from './alta-editar-alumno.component';

describe('AltaEditarAlumnoComponent', () => {
  let component: AltaEditarAlumnoComponent;
  let fixture: ComponentFixture<AltaEditarAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltaEditarAlumnoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AltaEditarAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
