import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaEditarDojoComponent } from './alta-editar-dojo.component';

describe('AltaEditarDojoComponent', () => {
  let component: AltaEditarDojoComponent;
  let fixture: ComponentFixture<AltaEditarDojoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltaEditarDojoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AltaEditarDojoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
