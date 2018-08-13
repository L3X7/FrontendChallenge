import { TestBed, inject } from '@angular/core/testing';

import { ItunesApiService } from './itunes-api.service';

describe('ItunesApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItunesApiService]
    });
  });

  it('should be created', inject([ItunesApiService], (service: ItunesApiService) => {
    expect(service).toBeTruthy();
  }));
});
