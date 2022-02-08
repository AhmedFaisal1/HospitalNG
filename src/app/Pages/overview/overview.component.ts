import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  gridStyle = {
    width: '25%',
    textAlign: 'center'
  };
  constructor() { }

  ngOnInit(): void {
  }

}
