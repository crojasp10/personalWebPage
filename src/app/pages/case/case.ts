import { Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { pieces } from '../../cv';
import { Language } from '../../language';

@Component({
  selector: 'app-case',
  imports: [RouterLink],
  templateUrl: './case.html',
})
export class CasePage {
  readonly slug = input('');
  private readonly i18n = inject(Language);
  protected readonly t = this.i18n.t;
  protected readonly model = computed(() => {
    const base = pieces.find((item) => item.slug === this.slug());
    if (!base) {
      return null;
    }
    return {
      ...base,
      ...this.t().projects.items[base.slug],
    };
  });
}
