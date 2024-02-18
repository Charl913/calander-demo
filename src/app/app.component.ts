import { Component } from '@angular/core';
import { getDaysInMonth, getRows } from './create-calander';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentMonth = new Date().getMonth();
  currentYear = new Date().getFullYear();
  currentDate = new Date().getDate();
  month: Date[] = [];
  rows: Date[][] = [];

  constructor() {
    this.month = getDaysInMonth(this.currentMonth, this.currentYear);
    this.rows = getRows(this.month);
  }

  isCurrentDate(date: Date): boolean {
    const currentDateDay = this.currentDate;
    return date.getDate() === currentDateDay;
  }

  displaySomething(date: Date) {
    alert(date);
  }
}