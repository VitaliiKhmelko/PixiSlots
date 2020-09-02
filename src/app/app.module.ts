import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SlotsModule } from './games/slots/slots.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SlotsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
