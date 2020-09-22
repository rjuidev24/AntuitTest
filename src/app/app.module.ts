import { BackendService } from './backend.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabContentComponent } from './tab-content/tab-content.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { TabsModule } from 'ngx-bootstrap/tabs';

const NgxBootstrapModules = [
  TabsModule.forRoot()
];

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    TabsComponent,
    TabContentComponent,
    ToolBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    FlexModule,
    FlexLayoutModule,
    HttpClientModule,
    ...NgxBootstrapModules
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
