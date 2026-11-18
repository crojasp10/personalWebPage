import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { pieces } from '../../cv';
import { Language } from '../../language';

@Component({
  selector: 'app-projects',
  imports: [RouterLink],
  templateUrl: './projects.html',
})
export class ProjectsPage {
  private readonly i18n = inject(Language);
  protected readonly t = this.i18n.t;
  protected readonly catalog = computed(() =>
    pieces.map((piece) => ({
      ...piece,
      ...this.t().projects.items[piece.slug],
    })),
  );

  protected pad(value: number): string {
    return String(value).padStart(2, '0');
  }
}
