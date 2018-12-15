import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
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

  recipe_list(user_id) {
    return new Promise(resolve => {
      this.http.get("https://foodguideapi.herokuapp.com/recipes?user_id="+user_id)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        });
    });
  }
  get_recipe(id) {
    return new Promise(resolve => {
      this.http.get("https://foodguideapi.herokuapp.com/recipes/"+id+".json")
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        });
    });
  }
  ingredient_user_parent_category(user_id) {
    return new Promise(resolve => {
      this.http.get("https://foodguideapi.herokuapp.com/user_ingredients?user_parent_group=1&user_id="+user_id)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        });
    });
  }

  ingredient_parent_category(user_id) {
    return new Promise(resolve => {
      this.http.get("https://foodguideapi.herokuapp.com/ingredients?user_id="+user_id)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        });
    });
  }
  get_child_ingredient(parent_id, user_id) {
    return new Promise(resolve => {
      this.http.get("https://foodguideapi.herokuapp.com/ingredients?parent_id="+parent_id+"&user_id="+user_id)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        });
    });
  }
  get_user_child_ingredient(id, user_id) {
    return new Promise(resolve => {
      this.http.get("https://foodguideapi.herokuapp.com/user_ingredients.json?&user_id="+user_id+"&parent_id="+id)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        });
    });
  }

  get_past_history(user_id) {
    return new Promise(resolve => {
      this.http.get("https://foodguideapi.herokuapp.com/past_histories?user_id="+user_id)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        });
    });
  }
  get_favourites(user_id) {
    return new Promise(resolve => {
      this.http.get("https://foodguideapi.herokuapp.com/favourites.json?user_id="+user_id)
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
      this.http.post("https://foodguideapi.herokuapp.com/user_ingredients.json", postParams)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        });
    });
  }
  complete_cooking(recipe_id, user_id) {
		let postParams = {
        id: recipe_id,
        user_id: user_id
      }

    return new Promise(resolve => {
      this.http.post("https://foodguideapi.herokuapp.com/user_ingredients/cook_recipe.json", postParams)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        });
    });
  }
  add_to_fav(recipe_id, user_id) {
		let postParams = {
        recipe_id: recipe_id,
        user_id: user_id
      }

    return new Promise(resolve => {
      this.http.post("https://foodguideapi.herokuapp.com/favourites.json", postParams)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        });
    });
  }

}
