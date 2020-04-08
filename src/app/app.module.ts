import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChartbasicComponent } from './chartbasic/chartbasic.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartbasicComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
