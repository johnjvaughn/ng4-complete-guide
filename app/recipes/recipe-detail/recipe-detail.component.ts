import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(private shoppingListService: ShoppingListService,
              private recipeService: RecipeService,
              private router: Router,
              private route: ActivatedRoute) { }
  
  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => { this.id = +params['id'];
                            this.recipe = this.recipeService.getRecipe(this.id) } )
  }

  onSendIngredientsToSL() {
    this.shoppingListService.addIngredients(this.recipe.ingredients);
  }

  onDelete() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }
}
