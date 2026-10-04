export type Statut = 'à voir' | 'en cours' | 'vu';

export interface Films {
  id: number;
  titre: string;
  annee: number;
  realisateur: string;
  statut: Statut;
}
