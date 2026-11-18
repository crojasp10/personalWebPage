import { Injectable, computed, effect, signal } from '@angular/core';
import { copy, type Lang } from './cv';

const STORAGE_KEY = 'meridiano-lang';

function readLang(): Lang {
  try {
    return localStorage.getItem(STORAGE_KEY) === 'en' ? 'en' : 'es';
  } catch {
    return 'es';
  }
}

@Injectable({ providedIn: 'root' })
export class Language {
  readonly lang = signal<Lang>(readLang());
  readonly t = computed(() => copy[this.lang()]);

  constructor() {
    effect(() => {
      const lang = this.lang();
      document.documentElement.lang = lang;
      try {
        localStorage.setItem(STORAGE_KEY, lang);
      } catch {
        // Storage can be unavailable in private mode. The choice still applies for this visit.
      }
    });
  }

  set(lang: Lang): void {
    this.lang.set(lang);
  }
}
