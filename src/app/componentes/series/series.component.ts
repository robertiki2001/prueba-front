import { Component } from '@angular/core';
import { ApiService } from '../../servicios/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-series',
  standalone: true,
  imports: [],
  templateUrl: './series.component.html',
  styleUrl: './series.component.css'
})
export class SeriesComponent {
  series: any[] = [];

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.loadSeries();
  }

  loadSeries() {
    this.apiService.getSeries().subscribe((data: any) => {
      this.series = data.results;
    });
  }

  showSerie(movie: any) {
    const characterId = movie.id;
    this.router.navigate(['/serie', characterId]);
  }
}