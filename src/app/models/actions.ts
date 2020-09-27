import { STATUS } from '../enums/status.enum';

export interface IAction {
  name: string;
  status: number;
  cycle?: 'n' | 'y';
  icon?: string;
  icons?: string[];
}

export class Action {
  name: string;
  status: STATUS;
  cycle: 'y' | 'n';
  icon?: string;
  icons?: string[];

  constructor(iData: IAction) {
    this.name = iData.name;
    this.status = iData.status || STATUS.ACTIVE;
    this.cycle = iData.cycle || 'y';
    this.icon = iData.icon || '';
    this.icons = iData.icons || [];
  }
}
