import { TestBed } from '@angular/core/testing';

import { UsuariosGestionService } from './usuarios-gestion.service';

describe('UsuariosGestionService', () => {
  let service: UsuariosGestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuariosGestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
