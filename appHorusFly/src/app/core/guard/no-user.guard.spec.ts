import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { noUserGuard } from './no-user.guard';

describe('noUserGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => noUserGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
