import { Injectable, signal } from '@angular/core';
import { Films } from '../models/films';

@Injectable({ providedIn: 'root' })
export class FilmService {
  private readonly _films = signal<Films[]>([
    { id: 1, titre: 'Les Ombres de la guerre', annee: 2004, realisateur: 'Mr LEUMEGNE', statut: 'vu' },
    { id: 2, titre: 'Un amour à Douala', annee: 2004, realisateur: 'Mr TCHOUGONG', statut: 'en cours' },
    { id: 3, titre: 'Le Dernier Front', annee: 2010, realisateur: 'Mr CHIMI', statut: 'à voir' },
    { id: 4, titre: 'Cœurs en Fuite', annee: 2024, realisateur: 'Mr TAGNE', statut: 'en cours' },
    { id: 5, titre: 'La Frontière', annee: 2014, realisateur: 'Mr KOUABEU', statut: 'vu' },
    { id: 6, titre: 'Mon ex preferé', annee: 2023, realisateur: 'Mme MEJIOVOUC', statut: 'à voir' },
    { id: 7, titre: 'Triple V', annee: 2025, realisateur: 'Mr KOUABEU', statut: 'à voir' },
    { id: 8, titre: 'La nuit porte conseil', annee: 2019, realisateur: 'Mr SAM', statut: 'à voir' },
    { id: 9, titre: 'La voisine', annee: 2014, realisateur: 'Mme KENFACK', statut: 'en cours' },
  ]);

  readonly films = this._films.asReadonly();

    ajouter(donnees: Omit<Films, 'id'>): void {
    const id = this._films().reduce((max, f) => Math.max(max, f.id), 0) + 1;
    this._films.update((liste) => [...liste, { id, ...donnees }]);
  }
    modifier(id: number, donnees: Omit<Films, 'id'>): void {
    this._films.update((liste) =>
      liste.map((f) => (f.id === id ? { id, ...donnees } : f)),
    );
  }
    private readonly _message = signal<string | null>(null);
  readonly message = this._message.asReadonly();

  supprimer(id: number): void {
    this._films.update((liste) => liste.filter((f) => f.id !== id));
    this._message.set('Film supprimé');
    setTimeout(() => this._message.set(null), 4000);
  }
  getFilmById(id: number): Films | undefined {
    return this._films().find((f) => f.id === id);
  }
}
