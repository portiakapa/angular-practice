import { Injectable } from '@angular/core';
import { Angular} from './details';
import { PERSON } from './mock-details';


@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor() { }
  getDetails(): Angular[] {
    return PERSON;
  }
}
