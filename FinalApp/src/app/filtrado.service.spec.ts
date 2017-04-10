import { TestBed, inject } from '@angular/core/testing';

import { FiltradoService } from './filtrado.service';

describe('FiltradoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FiltradoService]
    });
  });

  it('should ...', inject([FiltradoService], (service: FiltradoService) => {
    expect(service).toBeTruthy();
  }));
});
