import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-create-date',
  templateUrl: './create-date.component.html',
  styleUrls: ['./create-date.component.css'],
})
export class CreateDateComponent {
  @Output() newDate = new EventEmitter<any>();

  name: string = '';
  date: string = '';
  time: string = '';
  symptoms: string = '';

  validateForm: boolean = false;

  constructor() {}

  public createDate(): void {
    const Date = {
      name: this.name,
      date: this.date,
      time: this.time,
      symptoms: this.symptoms,
    };

    if ([this.name, this.date, this.time, this.symptoms].includes('')) {
      this.validateForm = true;
      setTimeout(() => {
        this.validateForm = false;
      }, 3000);
      return;
    }

    this.sendDate(Date);
  }

  public sendDate(date: any): void {
    this.newDate.emit(date);
  }
}
