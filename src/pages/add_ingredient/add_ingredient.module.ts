import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddIngredient } from './add_ingredient';
import {IngredientServiceProvider} from '../../providers/ingredient-service/ingredient-service';

@NgModule({
  declarations: [
    AddIngredient,
  ],
  imports: [
    IonicPageModule.forChild(AddIngredient),
  ],
  exports: [
    AddIngredient
  ],
  providers: [IngredientServiceProvider],
})
export class AddIngredientModule {}