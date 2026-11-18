import { Component, inject, signal } from '@angular/core';
import { externalLinks, person, portMarks } from '../../cv';
import { Language } from '../../language';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
})
export class ContactPage {
  private readonly i18n = inject(Language);
  protected readonly t = this.i18n.t;
  protected readonly person = person;
  protected readonly externalLinks = externalLinks;
  protected readonly portMarks = portMarks;
  protected readonly copied = signal(false);
  private timer = 0;

  protected copyEmail(): void {
    const write = navigator.clipboard?.writeText(person.email);
    if (!write) {
      window.location.href = `mailto:${person.email}`;
      return;
    }

    void write.then(
      () => {
        this.copied.set(true);
        window.clearTimeout(this.timer);
        this.timer = window.setTimeout(() => this.copied.set(false), 2200);
      },
      () => {
        window.location.href = `mailto:${person.email}`;
      },
    );
  }
}
