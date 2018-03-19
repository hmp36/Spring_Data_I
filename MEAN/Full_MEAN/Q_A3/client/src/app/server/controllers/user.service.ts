import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Http } from '@angular/http';

@Injectable()
export class UserService {
  constructor(
    private _http: Http
  ) { }
  getCurrentUser(){
    return this._http.get("/user");
  }
  create(user){
    return this._http.post("/user/create",user);
  }
  login(user: User, callback){
    this._http.post("/user/login", user).subscribe(
      res => {
        callback(res);
      },
      err => {
        callback(err)
      }
    );
  }
  logout(){
    return this._http.delete("/user/logout");
  }
  getUsers(){
    return this._http.get("/users");
  }
}
