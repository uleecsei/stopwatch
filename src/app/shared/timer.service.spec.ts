import { TestBed } from '@angular/core/testing';

import { TimerService } from './timer.service';
import { Time } from './time';

describe('TimerService', () => {
  let service: TimerService;
  const mockTime: Time = { seconds: '59', minutes: '01', hours: '01' };
  const expectedTime: Time = { seconds: '00', minutes: '02', hours: '01' };

  beforeEach(() => {
    service = new TimerService();
  });

  it('should return time object with 1 second iteration', () => {
    expect(service.timerIteration(mockTime)).toEqual(expectedTime);
  });
});
