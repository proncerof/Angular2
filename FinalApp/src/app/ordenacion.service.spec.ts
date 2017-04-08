import { TestBed, inject } from '@angular/core/testing';

import { OrdenacionService } from './ordenacion.service';

describe('OrdenacionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrdenacionService]
    });
  });

  it('should ...', inject([OrdenacionService], (service: OrdenacionService) => {
    expect(service).toBeTruthy();
  }));
});
