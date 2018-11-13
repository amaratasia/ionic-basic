import { Component } from '@angular/core';
import { NavController, IonicPage, ModalController, NavParams, ViewController } from 'ionic-angular';
import { IngredientServiceProvider } from '../../providers/ingredient-service/ingredient-service';
import { AuthProvider } from '../../providers/auth/auth';
import { HomePage } from '../../pages/home/home';
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
          console.log(this.ingredient_categories)
        })
      .catch( error => {
              console.log(error.message)
            })
  }
  presentProfileModal(id) {
    let profileModal = this.modalCtrl.create(Recipe, { recipe_id: id });
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
  character;
  cuisine;
  details;
  id;
  user_id;
  constructor(
    public params: NavParams,
    public nav: NavController,
    public viewCtrl: ViewController,
    private storage: Storage,
    public ingredientService: IngredientServiceProvider
  ) {
    this.cuisine = "Amar";
    this.storage.get('user_id').then((val) => {
      this.get_recipe(this.params.get('recipe_id'));
  })
  }

  get_recipe(id){
    this.ingredientService.get_recipe(id)
      .then(data => {
        console.log(data["id"])
        console.log(data)
          this.details = data["ingredient_list"];
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