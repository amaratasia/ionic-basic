import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';

import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';
import { GlobalProvider } from '../providers/global/global';
import { PostProvider } from '../providers/post/post';
import { AuthProvider } from '../providers/auth/auth';
import { AddIngredient } from '../pages/add_ingredient/add_ingredient';
import { ListIngredient } from '../pages/list_ingredient/list_ingredient';
import { Ingredient } from '../pages/list_ingredient/list_ingredient';
import { AddChildIngredient } from '../pages/add_ingredient/add_ingredient';
import { HelpCooking } from '../pages/help_cooking/help_cooking';
import { PastHistory } from '../pages/history/history';
import { Favourites } from '../pages/favourites/favourites';
import { Recipe } from '../pages/help_cooking/help_cooking';
import { Repurchase } from '../pages/repurchase/repurchase';
import { IngredientServiceProvider } from '../providers/ingredient-service/ingredient-service';

@NgModule({
  declarations: [
    MyApp,
    ListIngredient,
    Ingredient,
    AddIngredient,
    HelpCooking,
    Favourites,
    PastHistory,
    Repurchase,
    Recipe,
    AddChildIngredient
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListIngredient,
    Ingredient,
    AddIngredient,
    HelpCooking,
    Favourites,
    PastHistory,
    Repurchase,
    Recipe,
    AddChildIngredient
    // SignUpPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GlobalProvider,
    PostProvider,
    AuthProvider,
    IngredientServiceProvider
  ]
})
export class AppModule {}
