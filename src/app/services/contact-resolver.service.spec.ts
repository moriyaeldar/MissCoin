import { TestBed } from '@angular/core/testing';

import { contactResolverService } from './contact-resolver.service';

describe('contactResolverService', () => {
  let service: contactResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(contactResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
