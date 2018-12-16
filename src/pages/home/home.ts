import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

import { AuthProvider } from '../../providers/auth/auth';
import { ListIngredient } from '../list_ingredient/list_ingredient';
import { AddIngredient } from '../add_ingredient/add_ingredient';
import { HelpCooking } from '../help_cooking/help_cooking';
import { PastHistory } from '../history/history';
import { Repurchase } from '../repurchase/repurchase';
import { Favourites } from '../favourites/favourites';

@IonicPage()

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

	main_page_list: Array<{title: string, component: any}>;


  constructor(public nav: NavController, private auth: AuthProvider) {

  	// this.login_pages = [{
  	// 	title: ""
  	// }]

  	this.main_page_list = [
            {title: 'List my ingredients', component: ListIngredient},
            {title: 'Add Ingredients', component: AddIngredient},
            {title: 'Help me with Cooking', component: HelpCooking},
            {title: 'Weekly Schedule', component: PastHistory},
            {title: 'Purchase Groceries', component: Repurchase},
            {title: 'Favourites', component: Favourites}
        ];
  }
  navigate_menu(event){

this.nav.setRoot(event);

  }

	public logout() {
		this.auth.logout().subscribe(succ => {
		  this.nav.setRoot('LoginPage');
		});
	}

}
