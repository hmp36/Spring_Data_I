import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"

@Injectable()
export class UserService {
    constructor(private _http:HttpClient){

    }
    register(user,cb){
        console.log(user);
        this._http.post("/register",user)
        .subscribe(data=>cb(data));  
    }
    login(user,cb){
        this._http.post("/login",user)
          .subscribe(
            data => cb(data),
            err => cb(err)
          );  
    }
    session(cb){
      this._http.get("/session")
      .subscribe(data=>cb(data));
    }
    logout(){
      this._http.get("/logout").subscribe();
    }
}  
