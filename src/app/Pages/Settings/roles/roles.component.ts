import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
  ngOnInit(): void {
  }
  dataSet = [
    {
      ID: '1',
      Name: 'John Brown',
      Role: 'ADMIN'
    },
    {
      ID: '2',
      Name: 'Jim Green',
      Role: 'Doctor'
    },
    {
      ID: '3',
      Name: 'Joe Black',
      Role: 'Lab-Technical'
    }
  ];
}

