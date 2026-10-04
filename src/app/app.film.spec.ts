import { TestBed } from '@angular/core/testing';
import { AppFilm } from './app.film';

describe('AppFilm', () => {
  let service: AppFilm;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppFilm);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
