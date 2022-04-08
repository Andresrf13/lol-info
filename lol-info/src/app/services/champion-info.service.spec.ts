import { TestBed } from '@angular/core/testing';

import { ChampionInfoService } from './champion-info.service';

describe('ChampionInfoService', () => {
  let service: ChampionInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChampionInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
