import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe("Cheese Souffle", "Don't be afraid! Cheese souffles are surprisingly easy!",
               "http://www.recipage.com/images/user447/1326681076/recipe_image.jpg"),
    new Recipe("Pumpkin Pie Bars", "Made with almond flour, a great grain free alternative for the fall!",
               "http://www.recipage.com/images/user447/1326163145/recipe_image.jpg")
  ];

  constructor() { }

  ngOnInit() {
  }
  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
