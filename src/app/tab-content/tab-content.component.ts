import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tab } from '../models/tab';

@Component({
  selector: 'app-tab-content',
  templateUrl: './tab-content.component.html',
  styleUrls: ['./tab-content.component.scss']
})
export class TabContentComponent implements OnInit {

  @Input() tabData: Tab;
  @Output() gotoTab = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  print(text: string): void {
    console.log(text);
    this.gotoTab.emit(text);
  }
}
