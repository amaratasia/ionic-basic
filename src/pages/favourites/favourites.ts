import { Component } from '@angular/core';
import { NavController, IonicPage, ModalController, NavParams, ViewController } from 'ionic-angular';
import { IngredientServiceProvider } from '../../providers/ingredient-service/ingredient-service';
import { AuthProvider } from '../../providers/auth/auth';
import { HomePage } from '../../pages/home/home';
import { Storage } from '@ionic/storage';

@IonicPage()

@Component({
  selector: 'page-favourites',
  templateUrl: 'favourites.html',
})
export class Favourites {

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

  get_details(user_id){
    this.ingredientService.get_favourites(user_id)
      .then(data => {
        console.log(data)
          this.ingredient_categories = data;
        })
      .catch( error => {
              console.log(error.message)
            })
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
