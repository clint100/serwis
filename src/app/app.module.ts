import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ZawodnikService} from '../services/zawodnik.service';
import { ZawodnikComponent } from './components/zawodnik/zawodnik.component';

@NgModule({
  declarations: [
    AppComponent,
    ZawodnikComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ZawodnikService],
  bootstrap: [AppComponent]
})
export class AppModule { }
