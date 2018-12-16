import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Repurchase } from './repurchase';

@NgModule({
  declarations: [
    Repurchase,
  ],
  imports: [
    IonicPageModule.forChild(Repurchase),
  ],
  exports: [
    Repurchase
  ]
})
export class ListIngredientModule {}