import { Component } from '@angular/core';
import { NavController, IonicPage, ModalController, NavParams, ViewController } from 'ionic-angular';

import { AuthProvider } from '../../providers/auth/auth';
import { HomePage } from '../../pages/home/home';

@IonicPage()

@Component({
  selector: 'page-list-ingredient',
  templateUrl: 'list_ingredient.html',
})
export class ListIngredient {

  ingredient_categories: Array<{title: string, id: number}>;

  constructor(public nav: NavController, public modalCtrl: ModalController, private auth: AuthProvider) {
    
  }
  presentProfileModal() {
    let profileModal = this.modalCtrl.create(Ingredient, { userId: 8675309 });
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
  title;

  constructor(
    public params: NavParams,
    public nav: NavController,
    public viewCtrl: ViewController,
  ) {
    this.cuisine = {'digest': [{label: "amar", unit: 120, total: 120}], image: true}
    this.title = this.params.get('userId');
  }
  goToHome(){
    this.nav.setRoot(HomePage);
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }

}