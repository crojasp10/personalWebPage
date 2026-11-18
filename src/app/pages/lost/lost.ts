import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Language } from '../../language';

@Component({
  selector: 'app-lost',
  imports: [RouterLink],
  templateUrl: './lost.html',
})
export class LostPage {
  private readonly i18n = inject(Language);
  protected readonly t = this.i18n.t;
}
