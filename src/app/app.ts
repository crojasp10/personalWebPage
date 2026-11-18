import { Component, computed, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { filter, map } from 'rxjs';
import { navItems, person, pieceFromUrl, portMarks, railLinks, sectionKey } from './cv';
import { Language } from './language';
import { Seal } from './seal';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, Seal],
  templateUrl: './app.html',
})
export class App {
  protected readonly i18n = inject(Language);
  protected readonly person = person;
  protected readonly railLinks = railLinks;
  protected readonly portMarks = portMarks;
  protected readonly navItems = navItems;
  protected readonly t = this.i18n.t;
  private readonly router = inject(Router);

  private readonly url = toSignal(
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      map((event) => event.urlAfterRedirects),
    ),
    { initialValue: this.router.url },
  );

  protected readonly night = computed(() => sectionKey(this.url() ?? '/') === 'contact');

  constructor() {
    effect(() => {
      const text = this.t();
      const current = this.url() ?? '/';
      const key = sectionKey(current);
      const slug = pieceFromUrl(current);
      const pieceName = slug ? text.projects.items[slug].name : null;
      const section = pieceName ?? text.sections[key];
      document.title = `${section} · ${person.name}`;
      document
        .querySelector('meta[name="description"]')
        ?.setAttribute('content', text.metaDescription);
    });
  }
}
