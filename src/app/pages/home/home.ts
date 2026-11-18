import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Language } from '../../language';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
})
export class HomePage {
  private readonly i18n = inject(Language);
  protected readonly t = this.i18n.t;
}
