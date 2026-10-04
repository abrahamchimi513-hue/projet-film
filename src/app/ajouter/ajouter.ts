import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { FilmService } from '../film.service';
import { Statut } from '../../models/films';

@Component({
  selector: 'app-ajouter',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './ajouter.html',
  styleUrl: './ajouter.css',
})
export class Ajouter {
  private fb = inject(FormBuilder);
  protected service = inject(FilmService);
  protected router = inject(Router);

  statuts: Statut[] = ['à voir', 'en cours', 'vu'];
  anneeMax = new Date().getFullYear() + 5;
    titrePage = 'Ajouter un film';
  libelleBouton = 'Ajouter le film';
  lienAnnuler: any[] = ['/accueil'];

  form = this.fb.nonNullable.group({
    titre: ['', [Validators.required, Validators.pattern(/\S/)]],
    annee: [
      new Date().getFullYear(),
      [Validators.required, Validators.min(1888), Validators.max(this.anneeMax)],
    ],
    realisateur: ['', [Validators.required, Validators.pattern(/\S/)]],
    statut: ['à voir' as Statut, Validators.required],
  });

  champInvalide(nom: 'titre' | 'annee' | 'realisateur'): boolean {
    const c = this.form.controls[nom];
    return c.invalid && (c.touched || c.dirty);
  }

  envoyer(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const v = this.form.getRawValue();
    this.service.ajouter({
      titre: v.titre.trim(),
      annee: Number(v.annee),
      realisateur: v.realisateur.trim(),
      statut: v.statut,
    });
    this.router.navigate(['/accueil']);
  }
}
