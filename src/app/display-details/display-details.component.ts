import { Component, OnInit } from '@angular/core';
import { personal } from '../forloop';
import { person } from '../mock-forloop';
@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.scss']
})
export class DisplayDetailsComponent implements OnInit {
  per = person;
  display:any;
  

  constructor() { }

  ngOnInit() {
     console.log(' information', this.per)
  }
  onSelect(display){
    console.log(display)
    this.display = person;
}
}