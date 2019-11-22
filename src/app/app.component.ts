import { Component } from '@angular/core';

export interface Computation {
  start: string;
  startDate: Date;
  digitPos: number;
  result: string;
  time: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pi-app';
}
