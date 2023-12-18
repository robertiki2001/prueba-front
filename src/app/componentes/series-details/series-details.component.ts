import { Component } from '@angular/core';
import { ApiService } from '../../servicios/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-series-details',
  standalone: true,
  imports: [],
  templateUrl: './series-details.component.html',
  styleUrl: './series-details.component.css'
})
export class SeriesDetailsComponent {

  serie: any;

  constructor(private route: ActivatedRoute,private apiService: ApiService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const characterId = params['id'];
      this.apiService.getSeriePorId(characterId).subscribe({
        next: (character: any) => {
          this.serie = character;
        },
        error: (error: any) => {
          console.error('Error loading character:', error);
        }
      });
    });
  }
}