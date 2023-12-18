import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../servicios/api.service';

@Component({
  selector: 'app-peliculas',
  standalone: true,
  imports: [],
  templateUrl: './peliculas.component.html',
  styleUrl: './peliculas.component.css'
})
export class PeliculasComponent {

  peliculas: any[] = [];

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.loadMovies();
  }

  loadMovies() {
    this.apiService.getPeliculas().subscribe((data: any) => {
      this.peliculas = data.results;
    });
  }

  mostrarPersonaje(movie: any) {
    const characterId = movie.id;
    this.router.navigate(['/pelicula', characterId]);
  }
}