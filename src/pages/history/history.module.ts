import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PastHistory } from './history';

@NgModule({
  declarations: [
    PastHistory,
  ],
  imports: [
    IonicPageModule.forChild(PastHistory),
  ],
  exports: [
    PastHistory
  ]
})
export class ListIngredientModule {}