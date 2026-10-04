import { NgClass } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-detail',
  imports: [NgClass, RouterLink],
  templateUrl: './detail.html',
  styleUrl: './detail.css',
})
export class Detail {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private service = inject(FilmService);

  private id = Number(this.route.snapshot.paramMap.get('id'));

  film = computed(() => this.service.getFilmById(this.id));

  supprimer(id: number): void {
    this.service.supprimer(id);
    this.router.navigate(['/accueil']);
  }
}
