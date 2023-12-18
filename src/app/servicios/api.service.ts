import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlPeliculas = "https://api.themoviedb.org/3/movie/now_playing?api_key=4035f79eb1313ca0365ffa8cbb5c874d";

  private urlSeries = "https://api.themoviedb.org/3/tv/popular?api_key=4035f79eb1313ca0365ffa8cbb5c874d";

  constructor(private http: HttpClient) {}

  getPeliculas(): Observable<any[]>  {
    return this.http.get<any[]>("https://api.themoviedb.org/3/movie/now_playing?api_key=4035f79eb1313ca0365ffa8cbb5c874d");
  }

  getPeliculaPorId(movieId: number): Observable<any> {
    return this.http.get<any[]>("https://api.themoviedb.org/3/movie/"+movieId+"?api_key=4035f79eb1313ca0365ffa8cbb5c874d");
  }

  getSeries(): Observable<any[]>  {
    return this.http.get<any[]>("https://api.themoviedb.org/3/tv/popular?api_key=4035f79eb1313ca0365ffa8cbb5c874d");
  }


  getSeriePorId(movieId: number): Observable<any> {
    return this.http.get<any[]>("https://api.themoviedb.org/3/tv/"+movieId+"?api_key=4035f79eb1313ca0365ffa8cbb5c874d");
  }
}