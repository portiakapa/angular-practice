import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-months',
  templateUrl: './display-months.component.html',
  styleUrls: ['./display-months.component.scss']
})
export class DisplayMonthsComponent implements OnInit {
  
  selectedMonth: any;
  months = ["January", "Feburary", "March", "April", "May", 
  "June", "July", "August", "September",
  "October", "November", "December"];
  isavailable = true;   //variable is set to true

  constructor() { }

  ngOnInit() {
  }
    onMonthSel(month) {
      this.selectedMonth = month;
      console.log('month', month);
    }
  

  }
