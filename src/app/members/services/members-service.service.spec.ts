/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MembersServiceService } from './members-service.service';

describe('Service: MembersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MembersServiceService]
    });
  });

  it('should ...', inject([MembersServiceService], (service: MembersServiceService) => {
    expect(service).toBeTruthy();
  }));
});
