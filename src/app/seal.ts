import { Component } from '@angular/core';
import { person } from './cv';

@Component({
  selector: 'app-seal',
  templateUrl: './seal.html',
})
export class Seal {
  protected readonly initials = person.initials;
}
