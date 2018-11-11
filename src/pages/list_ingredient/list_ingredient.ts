import { Component } from '@angular/core';
import { NavController, IonicPage, ModalController, NavParams, ViewController } from 'ionic-angular';
import { IngredientServiceProvider } from '../../providers/ingredient-service/ingredient-service';
import { AuthProvider } from '../../providers/auth/auth';
import { HomePage } from '../../pages/home/home';

@IonicPage()

@Component({
  selector: 'page-list-ingredient',
  templateUrl: 'list_ingredient.html',
})
export class ListIngredient {

  ingredient_categories: Array<{title: string, id: number}>;

  constructor(public nav: NavController,
              public modalCtrl: ModalController,
              public ingredientService: IngredientServiceProvider,
              private auth: AuthProvider) {
    this.ingredient_categories = [{title: "amar", id: 1}]
    this.get_details();
  }

  get_details(){
    this.ingredientService.ingredient_user_parent_category()
      .then(data => {
          console.log(data);
          this.ingredient_categories = data['data'];
          console.log(data['data']);
        })
      .catch( error => {
              console.log(error.message)
            })
  }
  presentProfileModal(id) {
    let profileModal = this.modalCtrl.create(Ingredient, { parent_id: id });
    profileModal.present();
   }

  goToHome(){
    this.nav.setRoot(HomePage);
  }
	public logout() {
		this.auth.logout().subscribe(succ => {
		  this.nav.setRoot('LoginPage');
		});
	}

}

@Component({
  selector: 'page-list-ingredient-modal',
  templateUrl: 'ingredient.html'
})
export class Ingredient {
  character;
  cuisine;
  id;

  constructor(
    public params: NavParams,
    public nav: NavController,
    public viewCtrl: ViewController,
    public ingredientService: IngredientServiceProvider
  ) {
    this.id = this.params.get('parent_id');
    this.get_child_ingredients(this.id);
  }

  get_child_ingredients(id){
    this.ingredientService.get_user_child_ingredient(id)
      .then(data => {
          console.log(data);
          this.cuisine = data;
          console.log(this.cuisine);
        })
      .catch( error => {
              console.log(error.message)
            })

  }
  goToHome(){
    this.nav.setRoot(HomePage);
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }

}