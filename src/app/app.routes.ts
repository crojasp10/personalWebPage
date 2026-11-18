import { Routes } from '@angular/router';
import { CasePage } from './pages/case/case';
import { ContactPage } from './pages/contact/contact';
import { ExperiencePage } from './pages/experience/experience';
import { HomePage } from './pages/home/home';
import { LostPage } from './pages/lost/lost';
import { ProjectsPage } from './pages/projects/projects';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'experiencia', component: ExperiencePage },
  { path: 'proyectos', component: ProjectsPage },
  { path: 'proyectos/:slug', component: CasePage },
  { path: 'contacto', component: ContactPage },
  { path: '**', component: LostPage },
];
