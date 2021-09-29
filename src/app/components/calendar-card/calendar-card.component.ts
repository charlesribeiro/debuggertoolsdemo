import { Component} from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-calendar-card',
  templateUrl: './calendar-card.component.html',
  styleUrls: ['./calendar-card.component.scss']
})
export class CalendarCardComponent {

  customStartDate = new Date(1993, 10, 1);

  calendarEvents: string[] = [];

  constructor(){
    console.warn("just a test warning");
    console.error("just a test error");

    this.timeFunction();
  }

  addDateInputEvent(event: MatDatepickerInputEvent<Date>) {
    debugger;
    this.calendarEvents.push(`addDate ${event.value}`);
  }
  addDateChangeEvent(event: MatDatepickerInputEvent<Date>) {
    debugger;
    this.calendarEvents.push(`addDateChangeEvent ${event.value}`);
  }

  timeFunction(){
    console.time();

    for (let i = 0; i < 20; i++) {
      console.log("doing absolutely nothing here");
    }
    console.timeEnd();

    debugger;
  }
}
