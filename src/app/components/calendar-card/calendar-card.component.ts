import { Component} from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-calendar-card',
  templateUrl: './calendar-card.component.html',
  styleUrls: ['./calendar-card.component.scss']
})
export class CalendarCardComponent {

  customStartDate = new Date(1993, 15, 1);

  calendarEvents: string[] = [];

  addDateInputEvent(event: MatDatepickerInputEvent<Date>) {
    debugger;
    this.calendarEvents.push(`addDate ${event.value}`);
  }
  addDateChangeEvent(event: MatDatepickerInputEvent<Date>) {
    debugger;
    this.calendarEvents.push(`addDateChangeEvent ${event.value}`);
  }
}
