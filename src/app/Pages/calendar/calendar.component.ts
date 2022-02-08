import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  selectedValue = new Date('2017-01-25');

  selectChange(select: Date): void {
    console.log(`Select value: ${select}`);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
