import { Component, OnInit } from '@angular/core';
interface ItemData {
  id: string;
  name: string;
  Consultant: string;
  age: string;
  address: string;

}
@Component({
  selector: 'app-ipd',
  templateUrl: './ipd.component.html',
  styleUrls: ['./ipd.component.css']
})
export class IPDComponent implements OnInit {

  i = 1;
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
        Consultant:`Paschal Alex (1)`,
        age: '32',
        address: `London, Park Lane no. ${this.i}`,

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
