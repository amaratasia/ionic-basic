import { Component } from '@angular/core';
import { NavController, IonicPage, ModalController, NavParams, ViewController } from 'ionic-angular';
import { IngredientServiceProvider } from '../../providers/ingredient-service/ingredient-service';
import { AuthProvider } from '../../providers/auth/auth';
import { HomePage } from '../../pages/home/home';
import { Storage } from '@ionic/storage';

@IonicPage()

@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class PastHistory {

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
    this.ingredientService.get_past_history(user_id)
      .then(data => {
        console.log(data);
        console.log(data['data']);
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
