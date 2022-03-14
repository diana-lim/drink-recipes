import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { RecipesData } from './recipes.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(private http: HttpClient) { }

  getRecipesData() {
    return this.http.get<RecipesData[]>('/assets/data/drinks.json').pipe(
      map(data => {
        const recipesArray: Array<any> = [];
        for (let id in data) {
          if(data.hasOwnProperty(id)) {
            recipesArray.push(data[id]);
          }
        }
        return recipesArray;
      })
    )
  }
}
