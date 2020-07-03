import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {
  NoopAnimationsModule,
  BrowserAnimationsModule,
} from '@angular/platform-browser/animations';
import { TimerComponent } from './timer/timer.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [AppComponent, TimerComponent],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatButtonModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
