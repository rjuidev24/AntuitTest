import { Action, IAction } from './../../models/actions';
import { Component, OnInit } from '@angular/core';
import { BackendService } from './../../services/backend.service';
import { Tab } from './../../models/tab';
import { map, take } from 'rxjs/operators';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }]
})
export class TabsComponent implements OnInit {

  tabs$;
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

  goToTab(title: string): void {
    console.log('Select Tab' + title);
  }
}
