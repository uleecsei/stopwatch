import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerComponent } from './timer.component';
import { Time } from '../shared/time';

describe('TimerComponent', () => {
  let component: TimerComponent;
  let fixture: ComponentFixture<TimerComponent>;
  const expectedTime: Time = { seconds: '00', minutes: '00', hours: '00' };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TimerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should start and stop the timer when user clicks on the same button start/stop', () => {
    const nativeElement = fixture.debugElement.nativeElement;
    const startStopButton = nativeElement.querySelector(
      '.controlls__button:first-child'
    );
    startStopButton.dispatchEvent(new Event('click'));
    expect(component.isProcessing).toBeTrue();
    startStopButton.dispatchEvent(new Event('click'));
    expect(component.isProcessing).toBeFalse();
    expect(component.time).toEqual(expectedTime);
  });

  it('should stop the timer when user dbclicks wait', () => {
    const nativeElement = fixture.debugElement.nativeElement;
    const startStopButton = nativeElement.querySelector(
      '.controlls__button:first-child'
    );
    startStopButton.dispatchEvent(new Event('dbclick'));
    const waitButton = nativeElement.querySelector(
      '.controlls__button:nth-child(2)'
    );
    waitButton.dispatchEvent(new Event('click'));
    expect(component.isProcessing).toBeFalse();
  });

  it('should nullify time when user clicks reset', () => {
    const nativeElement = fixture.debugElement.nativeElement;
    const startStopButton = nativeElement.querySelector(
      '.controlls__button:first-child'
    );
    startStopButton.dispatchEvent(new Event('click'));
    const resetButton = nativeElement.querySelector(
      '.controlls__button:nth-child(3)'
    );
    resetButton.dispatchEvent(new Event('click'));
    expect(component.time).toEqual(expectedTime);
  });
});
