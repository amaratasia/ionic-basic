import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListIngredient } from './list_ingredient';

@NgModule({
  declarations: [
    ListIngredient,
  ],
  imports: [
    IonicPageModule.forChild(ListIngredient),
  ],
  exports: [
    ListIngredient
  ]
})
export class ListIngredientModule {}