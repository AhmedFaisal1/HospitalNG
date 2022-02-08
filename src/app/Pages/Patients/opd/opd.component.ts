import { Component, OnInit } from '@angular/core';
interface DataItem {
  ID:string;
  PaientName:string
  IsActive: boolean;
  From: string;
  To: string;
}
@Component({
  selector: 'app-opd',
  templateUrl: './opd.component.html',
  styleUrls: ['./opd.component.css']
})
export class OPDComponent implements OnInit {
  ngOnInit(): void {

  }

  searchValue = '';
  visible = false;
  listOfData: DataItem[] = [
    {
      ID:"1",
      PaientName: 'John Brown',
      IsActive: true,
      From: 'Wednesday June 16 2021',
      To:'Tuesday May 4 2021'
    },{
      ID:"2",
      PaientName: 'Petter parker',
      IsActive: true,
      From: 'Wednesday June 16 2021',
      To:'Tuesday May 4 2021'
    },
    {
      ID:"3",
      PaientName: 'Osman Mohammed',
      IsActive: false,
      From: 'Wednesday June 16 2021',
      To:'Tuesday May 4 2021'
    },
    {
      ID:"4",
      PaientName: 'Osama ahmed',
      IsActive: false,
      From: 'Wednesday June 16 2021',
      To:'Tuesday May 4 2021'
    },
    {
      ID:"5",
      PaientName: 'Ahmed ali',
      IsActive: true,
      From: 'Wednesday June 16 2021',
      To:'Tuesday May 4 2021'
    },


  ];
  listOfDisplayData = [...this.listOfData];

  reset(): void {
    this.searchValue = '';
    this.search();
  }

  search(): void {
    this.visible = false;
    this.listOfDisplayData = this.listOfData.filter((item: DataItem) => item.ID.indexOf(this.searchValue) !== -1);
  }
}
