import { TestBed } from '@angular/core/testing';

import { ConsultationRequestService } from './consultation-request.service';

describe('ConsultationRequestService', () => {
  let service: ConsultationRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultationRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
