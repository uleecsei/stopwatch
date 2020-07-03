import { Injectable } from '@angular/core';
import { timer, Observable } from 'rxjs';
import { Time } from './time';

@Injectable({
  providedIn: 'root',
})
export class TimerService {
  constructor() {}

  setTimer(): Observable<number> {
    return timer(1000, 1000);
  }

  timerIteration(time: Time): Time {
    if (Number(time.seconds) < 9) {
      time.seconds = parseInt(time.seconds, 10) + 1 + '';
      time.seconds = '0' + time.seconds;
    } else if (Number(time.seconds) < 59) {
      time.seconds = parseInt(time.seconds, 10) + 1 + '';
    } else if (Number(time.minutes) < 9) {
      time.minutes = parseInt(time.minutes, 10) + 1 + '';
      time.minutes = '0' + time.minutes;
      time.seconds = '00';
    } else if (Number(time.minutes) < 59) {
      time.minutes = parseInt(time.minutes, 10) + 1 + '';
      time.seconds = '00';
    } else if (Number(time.hours) < 9) {
      time.hours = parseInt(time.hours, 10) + 1 + '';
      time.hours = '0' + time.hours;
      time.minutes = time.seconds = '00';
    } else if (Number(time.hours) < 23) {
      time.hours = parseInt(time.hours, 10) + 1 + '';
      time.minutes = time.seconds = '00';
    } else {
      time.hours = time.minutes = time.seconds = '00';
    }
    return time;
  }
}
