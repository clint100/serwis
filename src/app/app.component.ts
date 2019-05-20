import { Component } from '@angular/core';
import {Zawodnik} from './classes/zawodnik';
import {ZawodnikService} from '../services/zawodnik.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ser';

  zawodnik: Zawodnik;

  constructor(private serwis: ZawodnikService) {

    this.zawodnik = this.serwis.getZawodnik('b');
  }


}
