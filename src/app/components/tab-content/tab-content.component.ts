import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tab } from '../../models/tab';

@Component({
  selector: 'app-tab-content',
  templateUrl: './tab-content.component.html',
  styleUrls: ['./tab-content.component.scss']
})
export class TabContentComponent {

  @Input() tabData: Tab;
  @Output() routeTo = new EventEmitter<number>();

  constructor() { }
}
