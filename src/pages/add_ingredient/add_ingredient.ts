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
  text: any;
  details_hash: any;
  display_details: boolean = false;
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
    this.details_hash = {609: "Calories 44<br/>Total Fat 0.1 g<br/>Saturated fat 0 g<br/>Polyunsaturated fat 0 g<br/>Monounsaturated fat 0 g<br/>Cholesterol 0 mg<br/>Sodium 4 mg<br/>Potassium 161 mg<br/>Total Carbohydrate 10 g<br/>Dietary fiber 1.9 g<br/>Sugar 4.7 g<br/>", 620: "Total Fat 0.2 g<br/>Saturated fat 0.1 g<br/>Polyunsaturated fat 0.1 g<br/>Monounsaturated fat 0 g<br/>Cholesterol 0 mg<br/>Sodium 13 mg<br/>Potassium 897 mg<br/>Total Carbohydrate 37 g<br/>Dietary fiber 4.7 g<br/>Sugar 1.7 g<br/>Protein 4.3 g<br/>"}
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
display_detail(){
  this.text = this.details_hash[this.todo.id];
  this.display_details = !this.display_details;
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