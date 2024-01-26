import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IngredientService } from './ingredient.service';
import { Ingredient } from './model/ingredient';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  //CREATE INGREDIENT
  @Input() createName?:string;
  @Input() createType?:string;
  @Input() createDesc?:string;

  @Output() createNameChange = new EventEmitter<string>();
  createIng:Ingredient = new Ingredient(0,"","","");

  title = 'angular-access-be';
  ingredientList:BehaviorSubject<Ingredient[]>= new BehaviorSubject<Ingredient[]>([]);

  constructor(private ingredientService :IngredientService){}

  ngOnInit(){
    this.ingredientService.getIngredients().subscribe(
      data => {
        this.ingredientList.next(data);
        console.log(this.ingredientList.getValue());
      }
    );
  }

  createIngredient(){
    this.createIng.name = this.createName;
    this.createIng.type = this.createType;
    this.createIng.description = this.createDesc;
    console.log(this.createIng);
    this.ingredientService.createIngredient(this.createIng).subscribe();
    window.location.reload();
  }

  deleteIngredient(item:Ingredient){
    console.log("item "+item.name+" deleted");
    this.ingredientService.deleteIngredient(item).subscribe();
    window.location.reload();
  }

  updateIngredient(item:Ingredient){
    console.log("item "+item.name+" updated");
  }
}
