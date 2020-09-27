import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActionButtonComponent } from './components/action-button/action-button.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { TabContentComponent } from './components/tab-content/tab-content.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { ToolBarComponent } from './components/tool-bar/tool-bar.component';
import { BackendService } from './services/backend.service';

import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';

import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faBell, faCalendar, faCircle, faDownload, faAngry, faFilter, faHeartbeat, faShare, faSync, faUpload } from '@fortawesome/free-solid-svg-icons';

import { NgxEchartsModule } from 'ngx-echarts';
import { ChartComponent } from './components/chart/chart.component';


const NgxBootstrapModules = [
  TabsModule.forRoot(),
  BsDropdownModule.forRoot()
];
@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    TabsComponent,
    TabContentComponent,
    ToolBarComponent,
    ActionButtonComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    FlexModule,
    FlexLayoutModule,
    HttpClientModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
    ...NgxBootstrapModules
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faBars, faBell, faCircle, faAngry, faHeartbeat, faShare, faFilter, faCalendar, faDownload, faUpload, faSync);
  }
}
