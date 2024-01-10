import { TestBed } from '@angular/core/testing';

import { DojoGestionService } from './dojo-gestion.service';

describe('DojoGestionService', () => {
  let service: DojoGestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DojoGestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
