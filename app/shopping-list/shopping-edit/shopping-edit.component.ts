import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() ingredientCreated = new EventEmitter<Ingredient>();
  
  constructor() { }

  ngOnInit() {
  }

  onAddIngredient(nameInput: HTMLInputElement, numInput: HTMLInputElement) {
    const ingredient = new Ingredient(nameInput.value, numInput.valueAsNumber);
    this.ingredientCreated.emit(ingredient);
  }


}
