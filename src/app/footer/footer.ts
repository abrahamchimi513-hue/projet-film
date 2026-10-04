import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  private service = inject(FilmService);

  films = this.service.films;
  annee = new Date().getFullYear();
}
