import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpModule, Http, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the IngredientServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class IngredientServiceProvider {

  constructor(public http: Http) {
  }


  ingredient_parent_category() {
    return new Promise(resolve => {
      this.http.get("http://0.0.0.0:3000/ingredients")
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        });
    });
  }
  get_child_ingredient(parent_id) {
    return new Promise(resolve => {
      this.http.get("http://0.0.0.0:3000/ingredients?parent_id="+parent_id)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        });
    });
  }

}
