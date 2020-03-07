import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Movie } from '../models/Movie';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

  movies: Movie[] = [];
  selectedMovie = null;
  editedMovie = null;

  constructor( private apiService: ApiService ) { }

  ngOnInit(): void {
    this.apiService.getMovies().subscribe(
      (data: Movie[]) => {
        this.movies = data;
      },
      error => console.log(error)
    );
  }

  selectMovie(movie: Movie) {
    this.selectedMovie = movie;
    this.editedMovie = null;
  }

  editMovie(movie: Movie) {
    this.selectedMovie = null;
    this.editedMovie = movie;
  }

  createNewMovie() {
    this.selectedMovie = null;
    this.editedMovie = {title: '', description: ''};
  }

  deletedMovie(movie: Movie) {
    this.apiService.deleteMovie(movie.id).subscribe(
      data => {
        console.log(data);
      },
      error => console.log(error)
    );
  }

}
