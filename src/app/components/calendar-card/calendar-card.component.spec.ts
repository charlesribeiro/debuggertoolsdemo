import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSliderModule } from '@angular/material/slider';

import { CalendarCardComponent } from './calendar-card.component';

describe('CalendarCardComponent', () => {
  let component: CalendarCardComponent;
  let fixture: ComponentFixture<CalendarCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatSliderModule,
        MatNativeDateModule,
        MatDatepickerModule,
      ],
      declarations: [ CalendarCardComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    })
    .compileComponents();
  }));

  beforeEach(() => {

    fixture = TestBed.createComponent(CalendarCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
