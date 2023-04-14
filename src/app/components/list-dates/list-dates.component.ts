import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-dates',
  templateUrl: './list-dates.component.html',
  styleUrls: ['./list-dates.component.css'],
})
export class ListDatesComponent {
  @Input() receiveDate: any[] = [];

  constructor() {}

  public deleteDate(index: number): void {
    this.receiveDate.splice(index, 1);
  }
}
