import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MoviesComponent } from './movies.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'movies', component: MoviesComponent }
    ])
  ],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
