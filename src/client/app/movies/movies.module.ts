import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MoviesComponent } from './movies.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesFormComponent } from './moviesform.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [CommonModule, SharedModule, MoviesRoutingModule, ReactiveFormsModule],
  declarations: [MoviesComponent, MoviesFormComponent],
  exports: [MoviesComponent]
})
export class MoviesModule{}