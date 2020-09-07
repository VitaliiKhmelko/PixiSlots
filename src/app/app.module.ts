import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SlotsModule } from './games/slots/slots.module';
import { WindowRefService } from './services/window-ref.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SlotsModule,
  ],
  providers: [
    WindowRefService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
