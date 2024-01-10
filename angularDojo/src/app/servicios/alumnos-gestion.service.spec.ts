import { TestBed } from '@angular/core/testing';

import { AlumnosGestionService } from './alumnos-gestion.service';

describe('AlumnosGestionService', () => {
  let service: AlumnosGestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlumnosGestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
