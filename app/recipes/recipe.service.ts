import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  changesMade = false;
  private recipes: Recipe[] = [];
  // private recipes: Recipe[] = [
  //   new Recipe("Cheese Souffle", "Don't be afraid! Cheese souffles are surprisingly easy!",
  //              "http://www.recipage.com/images/user447/1326681076/recipe_image.jpg", 
  //              [new Ingredient('Cheese', 16),
  //               new Ingredient('Eggs', 4)]),
  //   new Recipe("Pumpkin Pie Bars", "Made with almond flour, a great grain free alternative for the fall!",
  //              "http://www.recipage.com/images/user447/1326163145/recipe_image.jpg", 
  //              [new Ingredient('Pumpkin', 12),
  //               new Ingredient('Sugar', 2),
  //               new Ingredient('Flour', 3)])
  // ];
  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipes(newRecipes: Recipe[]) {
    this.recipes = newRecipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
   }
}