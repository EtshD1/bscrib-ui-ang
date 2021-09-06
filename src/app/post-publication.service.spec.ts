import { TestBed } from '@angular/core/testing';

import { PostPublicationService } from './post-publication.service';

describe('PostPublicationService', () => {
  let service: PostPublicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostPublicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
