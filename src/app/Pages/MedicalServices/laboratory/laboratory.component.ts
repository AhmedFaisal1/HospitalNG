import { Component, OnInit } from '@angular/core';
interface ItemData {
  id: string;
  name: string;
  IsActive: boolean;
  Price: string;
  ServiceType: string;
}
@Component({
  selector: 'app-laboratory',
  templateUrl: './laboratory.component.html',
  styleUrls: ['./laboratory.component.css']
})
export class LaboratoryComponent implements OnInit {
  i = 1;
  editid: string | null = null;
  listOfData: ItemData[] = [];

  startEdit(id: string): void {
    this.editid = id;
  }

  stopEdit(): void {
    this.editid = null;
  }

  addRow(): void {
    this.listOfData = [
      ...this.listOfData,
      {
        id: `${this.i}`,
        name: `Edward King `,
        IsActive:true ,
        Price: `70 `,
        ServiceType:`laboratory`
      },
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
