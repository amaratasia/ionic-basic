import { Component } from '@angular/core';
import { NavController, IonicPage, ModalController, NavParams, ViewController } from 'ionic-angular';
import { IngredientServiceProvider } from '../../providers/ingredient-service/ingredient-service';
import { AuthProvider } from '../../providers/auth/auth';
import { HomePage } from '../../pages/home/home';
import { Favourites } from '../../pages/favourites/favourites';
import { PastHistory } from '../../pages/history/history';
import { Storage } from '@ionic/storage';

@IonicPage()

@Component({
  selector: 'page-help-cooking',
  templateUrl: 'help_cooking.html',
})
export class HelpCooking {

  ingredient_categories: any;
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
    this.ingredientService.recipe_list(user_id)
      .then(data => {
          this.ingredient_categories = data;
        })
      .catch( error => {
              console.log(error.message)
            })
  }
  presentProfileModal(id, name) {
    let profileModal = this.modalCtrl.create(Recipe, { recipe_id: id, name: name });
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
  selector: 'page-list-recipe-modal',
  templateUrl: 'recipe.html'
})
export class Recipe {
  details;
  id;
  user_id;
  recipe_id;
  text;
  video;
  re_name;
  constructor(
    public params: NavParams,
    public nav: NavController,
    public viewCtrl: ViewController,
    private storage: Storage,
    public ingredientService: IngredientServiceProvider
  ) {
    this.storage.get('user_id').then((val) => {
      this.user_id = val;
      console.log(this.params);
      this.recipe_id = this.params.get('recipe_id');
      this.get_recipe(this.recipe_id);
      this.re_name = this.params.data.name;
  })
  }

  get_recipe(id){
    this.ingredientService.get_recipe(id)
      .then(data => {
          this.text = data["ingredient_list"];
          this.video = data["video"];
        })
      .catch( error => {
              console.log(error.message)
            })

  }

  add_to_fav(){
    this.ingredientService.add_to_fav(this.recipe_id, this.user_id)
      .then(data => {
          this.nav.setRoot(Favourites);
        })
      .catch( error => {
              console.log(error.message)
            })

  }
  complete_cooking(){
    this.ingredientService.complete_cooking(this.recipe_id, this.user_id)
      .then(data => {
          this.nav.setRoot(PastHistory);
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