import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddIngredient } from './add_ingredient';

@NgModule({
  declarations: [
    AddIngredient,
  ],
  imports: [
    IonicPageModule.forChild(AddIngredient),
  ],
  exports: [
    AddIngredient
  ]
})
export class AddIngredientModule {}