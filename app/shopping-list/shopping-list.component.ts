import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
})

export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];
  private subscription: Subscription;
  
  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    this.subscription = this.slService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => { this.ingredients = ingredients; }
    );
  }
  // ngDoCheck() {
  //   this.ingredients = this.slService.getIngredients();
  // }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  // onIngredientCreated(ingredient: Ingredient) {
  //   this.slService.addIngredients([ingredient]);
  // }

  onEditItem(id: number) {
    this.slService.startedEditing.next(id);
  }
}