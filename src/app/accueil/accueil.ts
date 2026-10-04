import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FilmService } from '../film.service';

@Component({
  imports: [NgClass, RouterLink],
  selector: 'app-accueil',
  styleUrl: './accueil.css',
  templateUrl: './accueil.html',
})
export class Accueil {
  private service = inject(FilmService);

  films = this.service.films;
  message = this.service.message;
}
