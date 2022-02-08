import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
interface ItemData {
  id: string;
  name: string;
  age: string;
  address: string;
  from:string;
  to:string;
}
@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {

  i = 0;
  editId: string | null = null;
  listOfData: ItemData[] = [];

  startEdit(id: string): void {
    this.editId = id;
  }

  stopEdit(): void {
    this.editId = null;
  }

  addRow(): void {
    this.listOfData = [
      ...this.listOfData,
      {
        id: `${this.i}`,
        name: `Edward King ${this.i}`,
        age: '32',
        address: `London, Park Lane no. ${this.i}`,
        from:`Tuesday April 27 2021.${this.i}`,
        to:`Tuesday April 28 2021.${this.i}`,
      },
      {
        id: `${this.i}`,
        name: `Osman Mohamed ${this.i}`,
        age: '23',
        address: `paries,  Lane no. ${this.i}`,
        from:`Tuesday April 27 2021.${this.i}`,
        to:`Tuesday April 28 2021.${this.i}`,
      },{
        id: `${this.i}`,
        name: `Ahmed faisal ${this.i}`,
        age: '25',
        address: `Sudan,  Sh. ${this.i}`,
        from:`Tuesday April 27 2021.${this.i}`,
        to:`Tuesday April 28 2021.${this.i}`,
      },
      {
        id: `${this.i}`,
        name: `Reem Altaieb ${this.i}`,
        age: '30',
        address: `London, Park Lane no. ${this.i}`,
        from:`Tuesday April 27 2021.${this.i}`,
        to:`Tuesday April 28 2021.${this.i}`,
      }
    ];
    this.i++;
  }

  deleteRow(id: string): void {
    this.listOfData = this.listOfData.filter(d => d.id !== id);
  }

  ngOnInit(): void {
    this.addRow();
    this.addRow();
  }
}
