import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostProvider {

  	http: any;
	authUrl: string;

	constructor(http:Http){
		this.http = http;
		this.authUrl = 'https://foodguideapi.herokuapp.com/users/login'; 
	}

	restAuth(email, password){
		return this.http.post(this.authUrl,{"email": email,"password":password})
			.map(res => res.json());
	}
}
