import { Routes } from '@angular/router';
import { PeliculasComponent } from './componentes/peliculas/peliculas.component';
import { SeriesComponent } from './componentes/series/series.component';
import { PeliculasDetailsComponent } from './componentes/peliculas-details/peliculas-details.component';
import { SeriesDetailsComponent } from './componentes/series-details/series-details.component';

export const routes: Routes = [
    {path: '', redirectTo: '/peliculas', pathMatch: 'full'},
    {path: 'peliculas', component: PeliculasComponent},
    {path: 'series', component: SeriesComponent},
    {path: 'peliculas/:id', component: PeliculasDetailsComponent},
    {path: 'series/:id', component: SeriesDetailsComponent},
];
