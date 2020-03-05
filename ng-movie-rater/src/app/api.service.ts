import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Movie } from './models/Movie';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://localhost:8000/api/movies/';
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Token 124c2136ff6e046c3da6eccc9d3993d9f4b5a4d9'
  });
  // private movie = ['terminator', 'predator'];

  constructor(
    private httpClient: HttpClient
  ) { }

  getMovies() {
    return this.httpClient.get<Movie[]>(this.baseUrl, {headers: this.headers});
  }

  getMovie(id: number) {
    return this.httpClient.get<Movie>(`${this.baseUrl}${id}/`, {headers: this.headers});
  }
  
  rateMovie(rate: number, movieId: number) {
    const body = JSON.stringify({stars: rate});
    return this.httpClient.post(`${this.baseUrl}${movieId}/rate_movie/`, body, {headers: this.headers});
  }
}
