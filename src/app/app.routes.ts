import { Routes } from '@angular/router';
import { Accueil } from './accueil/accueil';
import { Ajouter } from './ajouter/ajouter';
import { Detail } from './detail/detail';
import { Modifier } from './modifier/modifier';

export const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: 'accueil', component: Accueil },
  { path: 'ajouter', component: Ajouter },
  { path: 'film/:id', component: Detail },
  { path: 'film/:id/modifier', component: Modifier },
  { path: '**', redirectTo: 'accueil' },
];
