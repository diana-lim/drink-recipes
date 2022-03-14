import { Component, OnInit } from '@angular/core';
import { RecipesService } from './recipes.service';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  recipesData: Array<any>;
  show: Boolean = false;
  drinkData: {};

  constructor(private recipesService: RecipesService) { }

  ngOnInit(): void {
    this.getRecipes();
  }

  getRecipes() {
    this.recipesService.getRecipesData().subscribe({
      next: data => {
        this.recipesData = data;
      },
      error: error => {
        console.error('There was an error!', error);
      }
    })
  }

  displayRecipe(drink) {
    this.show = !this.show;
    this.drinkData = drink;
  }

  closeRecipe() {
    this.show = !this.show;
  }

}
