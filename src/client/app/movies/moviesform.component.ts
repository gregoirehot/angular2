import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
    moduleId: module.id,
    selector: 'sd-movies-form',
    templateUrl: 'moviesform.component.html',
})
export class MoviesFormComponent implements OnInit {
    contact:string = "Contactez-nous";
    email:string = "mail@mail.com";
    movieTitle:string = "titre";

    features = [
        {
            description : "description 1"
        },
        {
            description : "description 2"
        },
        {
            description : "description 3"
        }
    ]




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


    onClick(evt:any, userName:string){
        console.log(evt, userName);
    }


}