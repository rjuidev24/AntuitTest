import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tab } from '../../models/tab';

@Component({
  selector: 'app-tab-content',
  templateUrl: './tab-content.component.html',
  styleUrls: ['./tab-content.component.scss']
})
export class TabContentComponent implements OnInit {

  @Input() tabData: Tab;
  @Output() selectedTab = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
}
