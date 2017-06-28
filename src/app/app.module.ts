import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WikidataComponent } from './wikidata/wikidata.component';

import { HttpModule } from '@angular/http';

import { ClarityModule } from "clarity-angular";
import { ControlPanelComponent } from './components/control-panel/control-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    WikidataComponent,
    ControlPanelComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ClarityModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
