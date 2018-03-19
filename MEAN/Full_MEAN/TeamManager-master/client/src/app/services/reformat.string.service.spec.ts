import { TestBed, inject } from '@angular/core/testing';

import { ReformatStringService } from './reformat.string.service';

describe('ReformatStringService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReformatStringService]
    });
  });

  it('should be created', inject([ReformatStringService], (service: ReformatStringService) => {
    expect(service).toBeTruthy();
  }));
});
