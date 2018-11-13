import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HelpCooking } from './help_cooking';

@NgModule({
  declarations: [
    HelpCooking,
  ],
  imports: [
    IonicPageModule.forChild(HelpCooking),
  ],
  exports: [
    HelpCooking
  ]
})
export class HelpCookingModule {}