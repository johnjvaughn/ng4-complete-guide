import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RecipeService } from '../recipes/recipe.service';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {
  constructor(private http: Http,
              private recipeService: RecipeService,
              private authService: AuthService) {}

  storeRecipes() {
    const token = this.authService.getToken();
    this.recipeService.changesMade = false;
    
    return this.http.put('https://ng-recipe-book-cf050.firebaseio.com/recipes.json?auth=' + token, 
                          this.recipeService.getRecipes())
                          .catch(this.handlePutError);
  }

  fetchRecipes() {
    // const token = this.authService.getToken();
    
    // this.http.get('https://ng-recipe-book-cf050.firebaseio.com/recipes.json?auth=' + token)
    this.http.get('https://ng-recipe-book-cf050.firebaseio.com/recipes.json')
              .map(
                (response: Response) => {
                  const recipes: Recipe[] = response.json();
                  for (let recipe of recipes) {
                    if (!recipe['ingredients']) {
                      recipe['ingredients'] = [];
                    }
                  }
                  return recipes;
                }
              )
              .subscribe(
                (recipes: Recipe[]) => {
                  this.recipeService.updateRecipes(recipes);
                }
              );
    this.recipeService.changesMade = false;
  }

  private handlePutError(error: any): Promise<any> {
    console.error('An error occurred saving to database.', error); // for demo purposes only
    this.recipeService.changesMade = true;
    return Promise.reject(error.message || error);
  }
}