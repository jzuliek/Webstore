import { TestBed } from '@angular/core/testing';

import { AppToastServiceService } from './app-toast-service.service';

describe('AppToastServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppToastServiceService = TestBed.get(AppToastServiceService);
    expect(service).toBeTruthy();
  });
});
