import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../servicios/api.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-peliculas-details',
  standalone: true,
  imports: [],
  templateUrl: './peliculas-details.component.html',
  styleUrl: './peliculas-details.component.css'
})
export class PeliculasDetailsComponent {

  pelicula: any;

  constructor(private route: ActivatedRoute,private apiService: ApiService) {}

  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe(params => {
      const characterId = params['id'];
      this.apiService.getPeliculaPorId(characterId).subscribe({
        next: (character: any) => {
          this.pelicula = character;
        },
        error: (error: any) => {
          console.error('Error loading character:', error);
        }
      });
    });
  }
}