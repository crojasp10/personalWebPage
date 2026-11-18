import { Component, computed, inject } from '@angular/core';
import { jobs } from '../../cv';
import { Language } from '../../language';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.html',
})
export class ExperiencePage {
  private readonly i18n = inject(Language);
  protected readonly t = this.i18n.t;
  protected readonly posts = computed(() =>
    jobs.map((job) => ({
      ...job,
      ...this.t().experience.jobs[job.id],
    })),
  );
}
