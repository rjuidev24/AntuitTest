import { Component, OnInit, ViewChild } from '@angular/core';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { finalize, map, take } from 'rxjs/operators';
import { Action, IAction } from './../../models/actions';
import { Tab } from './../../models/tab';
import { BackendService } from './../../services/backend.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }]
})
export class TabsComponent implements OnInit {
  @ViewChild('dynamicTabs', { static: false }) staticTabs: TabsetComponent;

  tabs$;
  states$;
  statesPopulated = false;
  messages: string[];
  actions: Action[];
  constructor(private httpService: BackendService) { }

  ngOnInit(): void {
    this.tabs$ = this.httpService.get('assets/tabs.json')
      .pipe(map(({ tabs }) => tabs as Tab[]));
    this.httpService.get('assets/messages.json')
      .pipe(take(1))
      .subscribe(({ messages }) => this.messages = messages);
    this.httpService.get('assets/actions.json')
      .pipe(
        take(1),
        map(({ actions }) => (actions as IAction[]).map(data => new Action(data)))
      ).subscribe(actions => this.actions = actions);
  }

  selectTab(tabNo: number): void {
    this.staticTabs.tabs[tabNo].active = true;
  }

  onOpenChange(isOpen: boolean): void {
    if (isOpen && !this.statesPopulated) {
      this.states$ = this.httpService.get('assets/states.json')
        .pipe(map((data: any) => {
          const keyValues = [];
          // tslint:disable-next-line: forin
          for ( const k in data ) {
            keyValues.push({ key: k, value: data[k] });
          }
          return keyValues;
        }),
        finalize(() => this.statesPopulated = true));
    }
  }
}
