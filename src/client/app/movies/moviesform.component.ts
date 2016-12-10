import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
    moduleId: module.id,
    selector: 'sd-movies-form',
    templateUrl: 'moviesform.component.html',
})
export class MoviesFormComponent implements OnInit {
    contact:string;

    formGroupMovie: FormGroup;

    constructor(public fb: FormBuilder){

    }

    ngOnInit(){
        // this.formGroupMovie = new FormGroup({
        //     movieTitle: new FormControl(),
        //     movieDirector: new FormControl()
        // });

        this.formGroupMovie = this.fb.group({
            movieTitle : ['', Validators.required],
            movieDirector : ['', Validators.required]
        });

        this.formGroupMovie.setValue({
            movieTitle : 'Titre test',
            movieDirector : 'James Director'
        });
    }

    onMovieSubmit(){
        console.log(this.formGroupMovie);
    }
}