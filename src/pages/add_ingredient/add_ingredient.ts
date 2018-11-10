import { Component } from '@angular/core';
import { NavController, IonicPage, ModalController, NavParams, ViewController } from 'ionic-angular';

import { AuthProvider } from '../../providers/auth/auth';
import { HomePage } from '../../pages/home/home';

@IonicPage()

@Component({
  selector: 'page-add-ingredient',
  templateUrl: 'add_ingredient.html',
})
export class AddIngredient {

  ingredient_categories: Array<{title: string, id: number}>;

  constructor(public nav: NavController, public modalCtrl: ModalController, private auth: AuthProvider) {
    
  }
    ionViewDidLoad() {
    console.log('ionViewDidLoad');
    
  }

presentProfileModal() {
   let profileModal = this.modalCtrl.create(Ingredient, { userId: 8675309 });
   profileModal.present();
 }


  ngOnInit(){

    console.log("ngOnInit");
    this.ingredient_categories = [
      {title: "string12", id: 122},
      {title: "stringss", id: 122},
      {title: "string", id: 122}
     ]
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
  selector: 'page-add-ingredient-modal',
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
    // this.peopleServiceProvider.loadin(this.title)
    //     .then(data => {
    //       loading.dismiss();
    //       console.log(data['hits'])
    //       var resp = data['hits'].sort(function(a,b) { return parseFloat(a.recipe.yield) - parseFloat(b.recipe.yield) } )
    //       this.cuisine = resp[resp.length - 1].recipe;
    //     });
  }
  goToHome(){
    this.nav.setRoot(HomePage);
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }

}