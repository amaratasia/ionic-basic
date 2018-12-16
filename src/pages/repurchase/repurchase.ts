import { Component } from '@angular/core';
import { NavController, IonicPage, ModalController, NavParams, ViewController } from 'ionic-angular';
import { IngredientServiceProvider } from '../../providers/ingredient-service/ingredient-service';
import { AuthProvider } from '../../providers/auth/auth';
import { HomePage } from '../../pages/home/home';
import { Storage } from '@ionic/storage';

@IonicPage()

@Component({
  selector: 'page-repurchase',
  templateUrl: 'repurchase.html',
})
export class Repurchase {

  ingredient_categories: any;
  user_id: number;
  isDisplayImage: boolean = false;

  constructor(public nav: NavController,
              public modalCtrl: ModalController,
              public ingredientService: IngredientServiceProvider,
              private storage: Storage,
              private auth: AuthProvider) {
     this.storage.get('user_id').then((val) => {
      this.user_id = val;
  })
  }

  goToHome(){
    this.nav.setRoot(HomePage);
  }
  openUrl(){ window.open('https://www.bigbasket.com/', '_system'); }
  open_map(){ window.open('https://www.google.com/maps/search/nearby+groceries/', '_system'); }

  public displayImage(){
       this.isDisplayImage = true;
  }
  
	public logout() {
		this.auth.logout().subscribe(succ => {
		  this.nav.setRoot('LoginPage');
		});
	}

}
