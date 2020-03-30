import { TestBed } from '@angular/core/testing';

import { StatementIdService } from './statement-id.service';

describe('StatementIdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StatementIdService = TestBed.get(StatementIdService);
    expect(service).toBeTruthy();
  });
});
