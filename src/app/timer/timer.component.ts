import { Component, OnInit } from '@angular/core';
import { TimerService } from '../shared/timer.service';
import { Time } from '../shared/time';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit {
  time: Time = { seconds: '00', minutes: '00', hours: '00' };
  isProcessing = false;
  timer: Subscription;
  clickCount = 0;
  dbClickTimeOut;
  DB_CLICK_DELAY = 300;

  constructor(private timerService: TimerService) {}

  ngOnInit(): void {}

  toggleTimer() {
    if (!this.isProcessing) {
      this.timer = this.timerService.setTimer().subscribe(() => {
        this.time = this.timerService.timerIteration(this.time);
      });
      this.isProcessing = true;
    } else {
      this.timer.unsubscribe();
      this.time.hours = this.time.minutes = this.time.seconds = '00';
      this.isProcessing = false;
    }
  }

  dbClickCheck() {
    this.clickCount++;
    this.dbClickTimeOut = setTimeout(() => {
      this.clickCount = 0;
      clearTimeout(this.dbClickTimeOut);
    }, this.DB_CLICK_DELAY);
    if (this.clickCount === 2) {
      this.wait();
      clearTimeout(this.dbClickTimeOut);
    }
  }

  wait() {
    this.timer.unsubscribe();
    this.isProcessing = false;
  }

  reset() {
    this.timer.unsubscribe();
    this.time.hours = this.time.minutes = this.time.seconds = '00';
    this.isProcessing = false;
    this.toggleTimer();
  }
}
