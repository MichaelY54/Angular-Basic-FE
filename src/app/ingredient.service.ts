import { Injectable } from '@angular/core';
import { map, Observable, throwError } from 'rxjs';
import { Ingredient } from './model/ingredient';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable({
  providedIn: 'root'
})

export class IngredientService {

  constructor(private http: HttpClient) { }

  getIngredients():Observable<any>{
    return this.http.get("http://localhost:8080/ingredient/list");
  }

  createIngredient(ing: Ingredient):Observable<any>{
    return this.http.post("http://localhost:8080/ingredient/create", ing);
  }

  updateIngredient(ing: Ingredient):Observable<any>{
    return this.http.put("http://localhost:8080/ingredient/update", ing);
  }

  deleteIngredient(ing: Ingredient):Observable<any>{
    return this.http.delete("http://localhost:8080/ingredient/delete/"+ing.id);
  }
}
