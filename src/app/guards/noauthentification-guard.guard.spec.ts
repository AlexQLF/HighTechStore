import { TestBed } from '@angular/core/testing';

import { NoauthentificationGuardGuard } from './noauthentification-guard.guard';

describe('NoauthentificationGuardGuard', () => {
  let guard: NoauthentificationGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NoauthentificationGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
