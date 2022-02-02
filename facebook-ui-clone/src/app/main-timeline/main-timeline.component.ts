import {
  AfterViewChecked,
  Component,
  OnInit,
} from '@angular/core';
import { CommonServService } from '../service/common-serv.service';

@Component({
  selector: 'app-main-timeline',
  templateUrl: './main-timeline.component.html',
  styleUrls: ['./main-timeline.component.scss'],
})
export class MainTimelineComponent implements OnInit, AfterViewChecked {

  constructor(private com: CommonServService) {}
  ngAfterViewChecked(): void {
    setTimeout(()=>this.com.setFooter(false),100);
  }

  ngOnInit(): void {

  }
}
