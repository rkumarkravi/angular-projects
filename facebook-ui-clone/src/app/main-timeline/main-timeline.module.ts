import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainTimelineRoutingModule } from './main-timeline-routing.module';
import { MainTimelineComponent } from './main-timeline.component';
import { MaterialModule } from '../common-module/material/material.module';
import { SideLeftComponent } from './side-left/side-left.component';
import { SideRightComponent } from './side-right/side-right.component';
import { PostFeedComponent } from './post-feed/post-feed.component';
import { PostTypeComponent } from './post-type/post-type.component';
import { PostCreatorComponent } from './post-creator/post-creator.component';


@NgModule({
  declarations: [
    MainTimelineComponent,
    SideLeftComponent,
    SideRightComponent,
    PostFeedComponent,
    PostTypeComponent,
    PostCreatorComponent
  ],
  imports: [
    CommonModule,
    MainTimelineRoutingModule,
    MaterialModule
  ],
  bootstrap:[MainTimelineComponent]
})
export class MainTimelineModule { }
