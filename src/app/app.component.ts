import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title ='Angular-Practice';
  profileForm: FormGroup;
  //  //variable is set to true

  
  


  ngOnInit(){
  //  this.initializePortiaForm();
  }

  // initializePortiaForm()
  // {
  //    this.profileForm= new FormGroup({
  //     firstName: new FormControl(),
  //     lastName: new FormControl()
  //   })
  // }
}

