import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  { path: 'film/:id', renderMode: RenderMode.Client },
  { path: 'film/:id/modifier', renderMode: RenderMode.Client },
  { path: '**', renderMode: RenderMode.Prerender },
];
