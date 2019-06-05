import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';


@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.scss']
})
export class ProfileEditorComponent implements OnInit {
updated =false;

  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      Province: [''],
      zip: [''],
    }),
    aliases: this.fb.array([
      this.fb.control('')
    ])
  });
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  
  }
  
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
    this.updated = true
  }
  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      lastName: 'Kapa',
      address: {
        street: '123 Drew Street',
        city: 'Tshwane',
        Province: 'Limpopo',
        zip: '0862',
        
      }
    });
  }
    get aliases() {
      return this.profileForm.get('aliases') as FormArray;
    }
    addAlias() {
      this.aliases.push(this.fb.control(''));
    }
    
  }
