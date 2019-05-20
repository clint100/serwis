import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ZawodnikService} from '../services/zawodnik.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ZawodnikService],
  bootstrap: [AppComponent]
})
export class AppModule { }
