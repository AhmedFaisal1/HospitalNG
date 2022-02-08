import { Component, OnInit } from '@angular/core';
interface ParentItemData {
  key: number;
  ID: string;
  UserName: string;
  Email: string;
  IsStaf: number | string;
  Roles: string;
  createdAt: string;
  expand: boolean;
}

interface ChildrenItemData {
  key: number;
  name: string;
  date: string;
  upgradeNum: string;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  listOfParentData: ParentItemData[] = [];
  listOfChildrenData: ChildrenItemData[] = [];

  ngOnInit(): void {
    for (let i = 0; i < 3; ++i) {
      this.listOfParentData.push({
        key: i,
        ID: '1',
        UserName: 'Ahmed Faisal',
        Email: 'Ahmed141faisal@gmail.com',
        IsStaf: 'YES',
        Roles: 'Admin',
        createdAt: '2014-12-24 23:12:00',
        expand: false
      });
    }
    for (let i = 0; i < 3; ++i) {
      this.listOfChildrenData.push({
        key: i,
        date: '2014-12-24 23:12:00',
        name: 'Ahmed Faisal',
        upgradeNum: 'Upgraded: 56'
      });
    }
  }
}
