import { Injector, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';

import { PostProvider } from '../../providers/post/post';
import { GlobalProvider } from '../../providers/global/global';

export class User {
  
  email: string;
  password: string;
  remember: string;

  constructor(email: string, password: string, remember: string) {

    this.email = email;
    this.password = password;
    this.remember = remember;
  }
}

@Injectable()

export class AuthProvider {

  currentUser: User;
  returnAccess: any;

  constructor(protected injector: Injector, public global:GlobalProvider, private storage: Storage, private post: PostProvider ){

  }

  public login(credentials) {

    if (credentials.email === null || credentials.password === null) {

      return Observable.throw("Please insert credentials");
    } else {

      return Observable.create(observer => {

        this.post.restAuth(credentials.email, credentials.password).subscribe( response => {
          this.returnAccess = response;
          if(this.returnAccess.result != "Success!"){
            this.global.showError(this.returnAccess.result);
          }else{            
            if(credentials.remember == "yes"){
              this.storage.set('user_id', this.returnAccess.user_id);
              this.storage.set('email', credentials.email);
              this.storage.set('password', credentials.password);
            }else{

              this.storage.remove("email");
              this.storage.remove("password");
              this.storage.remove("displayname");
            }       
            
            this.currentUser = new User(credentials.email, credentials.password, credentials.remember);      
            
            observer.next(true);
            observer.complete();
          }
        });
      });
    }
  }

  public getUserInfo() : User {
    return this.currentUser;
  }

  public logout() {
    return Observable.create(observer => {
      this.storage.remove("user_id");
      observer.next(true);
      observer.complete();
    });
  }

  postAuth(email, password){
    this.post.restAuth(email,password).subscribe( response => {
      this.returnAccess = response;
    });
  }
}