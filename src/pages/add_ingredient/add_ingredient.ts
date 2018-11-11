import { Component } from '@angular/core';
import { NavController, IonicPage, ModalController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { IngredientServiceProvider } from '../../providers/ingredient-service/ingredient-service';
import { AuthProvider } from '../../providers/auth/auth';
import { HomePage } from '../../pages/home/home';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';


@IonicPage()

@Component({
  selector: 'page-add-ingredient',
  templateUrl: 'add_ingredient.html',
})
export class AddIngredient {

  ingredient_categories: Array<{title: string, id: number}>;

  constructor(public nav: NavController, public modalCtrl: ModalController,
              public ingredientService: IngredientServiceProvider,
              private auth: AuthProvider) {
    
  }

  openIngredientDetail(id) {
    let profileModal = this.modalCtrl.create(AddChildIngredient, { ingredient_id: id });
    profileModal.present();
  }

  public ngOnInit(){
     this.get_parent_category_ingredient();
  }

  private get_parent_category_ingredient(){
    this.ingredientService.ingredient_parent_category()
      .then(data => {
        console.log(data)
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
  constructor(
    public params: NavParams,
    public nav: NavController,
    public ingredientService: IngredientServiceProvider,
    public viewCtrl: ViewController,
    private formBuilder: FormBuilder,
    private alertCtrl: AlertController
  ) {
    this.parent_id = this.params.get('ingredient_id');
    this.get_parent_category_ingredient();
    this.todo = {id: "", title: "", quantity: 0}
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

  public get_parent_category_ingredient(){
    this.ingredientService.get_child_ingredient(this.parent_id)
      .then(data => {
          this.ingredient_list = data['data'];
          console.log(this.ingredient_list);
        })
      .catch( error => {
              console.log(error.message)
            })
  }
  public post_child_ingredient(){
    this.ingredientService.post_child_ingredient(this.todo.id, this.todo.quantity, 1)
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