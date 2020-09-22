import { Component, OnInit } from '@angular/core';
import { BackendService } from './../backend.service';
import { Tab } from './../models/tab';
import { map } from 'rxjs/operators';
import { TabDirective } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  tabs;
  constructor(private httpService: BackendService) { }

  ngOnInit(): void {
    this.tabs = this.httpService.get('assets/tabs.json')
      .pipe(map(({ tabs }) => tabs.map(tab => tab as Tab)));
  }

  goToTab(title: string): void {
    console.log('Select Tab' + title);
  }
}
