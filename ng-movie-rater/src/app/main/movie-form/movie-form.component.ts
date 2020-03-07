import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../models/Movie';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent implements OnInit {

  @Input() movie: Movie;

  movieForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
  }

  saveForm() {
    console.log(this.movieForm.value)
  }
}
