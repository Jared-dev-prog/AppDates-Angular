import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  listDates: any[] = [];

  constructor() {}

  public addDate(date: any): void {
    this.listDates.push(date);
  }
}
