import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Ajouter } from '../ajouter/ajouter';

@Component({
  selector: 'app-modifier',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: '../ajouter/ajouter.html',
  styleUrl: '../ajouter/ajouter.css',
})
export class Modifier extends Ajouter {
  private route = inject(ActivatedRoute);
  private id = Number(this.route.snapshot.paramMap.get('id'));

  override titrePage = 'Modifier le film';
  override libelleBouton = 'Enregistrer les modifications';
  override lienAnnuler: any[] = ['/film', this.id];

  constructor() {
    super();
    const film = this.service.getFilmById(this.id);
    if (film) {
      // Pré-remplissage du formulaire avec les valeurs actuelles
      this.form.patchValue({
        titre: film.titre,
        annee: film.annee,
        realisateur: film.realisateur,
        statut: film.statut,
      });
    } else {
      this.router.navigate(['/accueil']);
    }
  }

  override envoyer(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const v = this.form.getRawValue();
    this.service.modifier(this.id, {
      titre: v.titre.trim(),
      annee: Number(v.annee),
      realisateur: v.realisateur.trim(),
      statut: v.statut,
    });
    this.router.navigate(['/film', this.id]);
  }
}
