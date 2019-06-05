import { Component, OnInit } from '@angular/core';
import { Angular } from '../details';
import { PERSON } from '../mock-details';

@Component({
  selector: 'app-enter-details',
  templateUrl: './enter-details.component.html',
  styleUrls: ['./enter-details.component.scss']
})
export class EnterDetailsComponent implements OnInit {
  person = PERSON;

  
  constructor() { }


  ngOnInit() {
  
  }


 }



















 
   // display:any;
  // selecteddisplay : any;
    // console.log(' information', this.person)
    //   onSelect(display){
//   console.log(display)
//   this.selecteddisplay = PERSON;
//   }
//