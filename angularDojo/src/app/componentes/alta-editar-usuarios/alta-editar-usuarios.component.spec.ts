import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaEditarUsuariosComponent } from './alta-editar-usuarios.component';

describe('AltaEditarUsuariosComponent', () => {
  let component: AltaEditarUsuariosComponent;
  let fixture: ComponentFixture<AltaEditarUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltaEditarUsuariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AltaEditarUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
