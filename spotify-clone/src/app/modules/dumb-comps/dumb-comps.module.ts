import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackComponent } from './track/track.component';
import { GreetingComponent } from './greeting/greeting.component';
import { IconWithNameComponent } from './icon-with-name/icon-with-name.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [TrackComponent, GreetingComponent, IconWithNameComponent],
  imports: [CommonModule, MatIconModule],
  exports: [TrackComponent, GreetingComponent, IconWithNameComponent],
})
export class DumbCompsModule {}
