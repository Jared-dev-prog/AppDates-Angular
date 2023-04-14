import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListDatesComponent } from './components/list-dates/list-dates.component';
import { CreateDateComponent } from './components/create-date/create-date.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, ListDatesComponent, CreateDateComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
