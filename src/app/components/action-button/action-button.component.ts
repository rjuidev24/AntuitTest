import { Component, Input } from '@angular/core';
import { STATUS } from 'src/app/enums/status.enum';
import { Action } from '../../models/actions';

@Component({
  selector: 'app-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.scss']
})
export class ActionButtonComponent {
  @Input() action: Action;
  customClass: string;

  constructor() { }

  cycleStyle(cycle: string): void {
    if (cycle === 'y') {
      switch (this.action.status) {
        case STATUS.ACTIVE:
          this.customClass = 'red';
          this.action.status = STATUS.PARTIAL;
          break;
        case STATUS.PARTIAL:
          this.customClass = 'blue';
          this.action.status = STATUS.COMPLETE;
          break;
        case STATUS.COMPLETE:
          this.customClass = 'green';
          this.action.status = STATUS.DISABLED;
          break;
        default:
          this.customClass = '';
          this.action.status = STATUS.ACTIVE;
          break;
      }
    }
  }

}
