import { Component } from '@angular/core';
import { NavController, IonicPage, ModalController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { IngredientServiceProvider } from '../../providers/ingredient-service/ingredient-service';
import { AuthProvider } from '../../providers/auth/auth';
import { HomePage } from '../../pages/home/home';
import { Storage } from '@ionic/storage';

@IonicPage()

@Component({
  selector: 'page-add-ingredient',
  templateUrl: 'add_ingredient.html',
})
export class AddIngredient {

  ingredient_categories: Array<{title: string, id: number}>;
user_id: number;
  constructor(public nav: NavController,
              public modalCtrl: ModalController,
              public ingredientService: IngredientServiceProvider,
              private storage: Storage,
              private auth: AuthProvider) {
    this.storage.get('user_id').then((val) => {
        this.user_id = val;
      this.get_parent_category_ingredient(val);
  })
    
    
  }
  openUrl(){ window.open('https://www.bigbasket.com/', '_system'); }


  openIngredientDetail(id) {
    let profileModal = this.modalCtrl.create(AddChildIngredient, { ingredient_id: id });
    profileModal.present();
  }

  private get_parent_category_ingredient(user_id){
    this.ingredientService.ingredient_parent_category(user_id)
      .then(data => {
          this.ingredient_categories = data['data'];
        })
      .catch( error => {
              // this.alert(error.message);
              console.log(error)
            })
  }
  public goToHome(){
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
export class AddChildIngredient {
  parent_id: number;
  ingredient_list: any;
  todo: any;
  user_id: any;
  constructor(
    public params: NavParams,
    public nav: NavController,
    public ingredientService: IngredientServiceProvider,
    public viewCtrl: ViewController,
    private storage: Storage,
    private alertCtrl: AlertController
  ) {
    this.parent_id = this.params.get('ingredient_id');
      this.storage.get('user_id').then((val) => {
        this.user_id = val;
      this.get_parent_category_ingredient(val);
  })
    
    this.todo = {id: 620, title: "Potato", quantity: 0}
  }

  registerIngredient() {
    this.post_child_ingredient();
    this.presentAlert();
    this.dismiss();
  }

  presentAlert() {
  let alert = this.alertCtrl.create({
    title: 'Add Ingredient',
    subTitle: "Ingredient Added",
    buttons: ['Dismiss']
  });
  alert.present();
}

  public get_parent_category_ingredient(user_id){
    this.ingredientService.get_child_ingredient(this.parent_id, user_id)
      .then(data => {
          this.ingredient_list = data['data'];
        })
      .catch( error => {
              console.log(error.message)
            })
  }
  public post_child_ingredient(){
    this.ingredientService.post_child_ingredient(this.todo.id, this.todo.quantity, this.user_id)
      .then(data => {
          this.ingredient_list = data['data'];
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