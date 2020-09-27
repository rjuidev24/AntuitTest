import { Component, Input, OnInit } from '@angular/core';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Action } from '../../models/actions';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss']
})
export class ToolBarComponent implements OnInit {
  faArrowLeft = faArrowLeft;
  faArrowRight = faArrowRight;
  currentMsg;

  @Input() messages: string[];
  @Input() actions: Action[];

  constructor() { }

  ngOnInit(): void {
    this.currentMsg = 0;
  }
}
