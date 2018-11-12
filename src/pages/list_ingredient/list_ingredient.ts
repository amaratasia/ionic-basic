import { Component } from '@angular/core';
import { NavController, IonicPage, ModalController, NavParams, ViewController } from 'ionic-angular';
import { IngredientServiceProvider } from '../../providers/ingredient-service/ingredient-service';
import { AuthProvider } from '../../providers/auth/auth';
import { HomePage } from '../../pages/home/home';
import { Storage } from '@ionic/storage';

@IonicPage()

@Component({
  selector: 'page-list-ingredient',
  templateUrl: 'list_ingredient.html',
})
export class ListIngredient {

  ingredient_categories: Array<{title: string, id: number}>;
  user_id: number;

  constructor(public nav: NavController,
              public modalCtrl: ModalController,
              public ingredientService: IngredientServiceProvider,
              private storage: Storage,
              private auth: AuthProvider) {
     this.storage.get('user_id').then((val) => {
      this.user_id = val;
      this.get_details(val)
  })
  }

  get_user_id(){
    this.storage.get('user_id').then((val) => {
      this.user_id = val;
  })
  }

  get_details(user_id){
    this.ingredientService.ingredient_user_parent_category(user_id)
      .then(data => {
          this.ingredient_categories = data['data'];
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
  user_id;
  constructor(
    public params: NavParams,
    public nav: NavController,
    public viewCtrl: ViewController,
    private storage: Storage,
    public ingredientService: IngredientServiceProvider
  ) {
    this.storage.get('user_id').then((val) => {
      this.get_child_ingredients(this.params.get('parent_id'), val);
  })
  }

  get_child_ingredients(id, user_id){
    this.ingredientService.get_user_child_ingredient(id, user_id)
      .then(data => {
          this.cuisine = data;
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