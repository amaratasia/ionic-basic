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


  ingredient_user_parent_category() {
    return new Promise(resolve => {
      this.http.get("http://0.0.0.0:9090/user_ingredients?user_parent_group=1")
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        });
    });
  }

  ingredient_parent_category() {
    return new Promise(resolve => {
      this.http.get("http://0.0.0.0:9090/ingredients")
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        });
    });
  }
  get_child_ingredient(parent_id) {
    return new Promise(resolve => {
      this.http.get("http://0.0.0.0:9090/ingredients?parent_id="+parent_id)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        });
    });
  }
  get_user_child_ingredient(id) {
    return new Promise(resolve => {
      this.http.get("http://0.0.0.0:9090/user_ingredients.json")
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        });
    });
  }
	post_child_ingredient(ingredient_id, quanity, user_id) {
		let postParams = {
        ingredient_id: ingredient_id,
        quanity: quanity,
        user_id: user_id
      }
    return new Promise(resolve => {
      this.http.post("http://0.0.0.0:9090/user_ingredients.json", postParams)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        });
    });
  }

}
