import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NumberComponent } from './number/number.component';

import { HttpModule } from '@angular/http';

import { ClarityModule } from "clarity-angular";

@NgModule({
  declarations: [
    AppComponent,
    NumberComponent
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